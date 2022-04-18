import { useState } from "react";
import CustomButton from "../../components/CustomButton/CustomButton";
import GostNumber from "../../components/GostNumber/GostNumber";
import InputNumeric from "../../components/InputNumeric/InputNumeric";
import SubText from "../../components/SubText/SubText";
import Title from "../../components/Title/Title";
import "./style.scss";

export default function InputAgePage(props: any) {
    const [age, setAge] = useState(25);
    const min = 18;
    const max = 100;

    function openCharacterPage() {
        window.location.href = "/height";
     }

    function saveSelectedAge(e:any){
        setAge(e);
        openCharacterPage()
     }
    return (
        <div className="agePage">
            <div className="title w-100">
                <Title title="Kaç Yaşındasın ?" />
            </div>
            <div className="ageMainContent">
                <img src="https://kigili.akinoncdn.com/products/2022/01/06/236834/e29beeb8-121b-4684-b999-2b4c8abf13ff_size555x830_quality90_cropCenter.jpg" alt="" className="rounded shadow my-auto mx-auto"/>
                <div className="input my-auto mx-auto">
                    <GostNumber value={age} min={min} max={max}/>
                    <InputNumeric className="mx-auto" placeholder="Yaşını girmelisin" min={min} max={max} value={age} setCallBackValue={setAge}/>
                </div>
            </div>
            <div className="subText">
                <SubText text="Yaşın vücut bölgelerindeki değişimi doğrudan etikler. Bununla birlikte seninle aynı yaş grubundaki kişileri tecrübelerine dayanarak sana daha doğru bir öneride bulunabiliriz." />

            </div>
            <div className="btn">
                <CustomButton text="Devam Et" disabled={!(age > min && age < max)} clickedOnBtn={saveSelectedAge}/>
            </div>

        </div>

    )
}