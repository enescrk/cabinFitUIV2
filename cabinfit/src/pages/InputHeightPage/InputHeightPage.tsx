import { useState } from "react";
import CustomButton from "../../components/CustomButton/CustomButton";
import GostNumber from "../../components/GostNumber/GostNumber";
import InputNumeric from "../../components/InputNumeric/InputNumeric";
import SubText from "../../components/SubText/SubText";
import Title from "../../components/Title/Title";
import "./style.scss";

export default function InputHeightPage() {
    const [height, setHeight] = useState(170);
    const min = 140;
    const max = 220;

    function openCharacterPage() {
        window.location.href = "/weight";
     }

    function saveSelectedAge(e:any){
        setHeight(e);
        openCharacterPage()
     }
    return (
        <div className="heightPage">
            <div className="title w-100">
                <Title title="Boyun Ne Kadar Uzun ?" />
            </div>
            <div className="heightMainContent">
                <img src="https://kigili.akinoncdn.com/products/2022/01/06/236834/e29beeb8-121b-4684-b999-2b4c8abf13ff_size555x830_quality90_cropCenter.jpg" alt="" className="rounded shadow my-auto mx-auto"/>
                <div className="input my-auto mx-auto">
                    <GostNumber value={height} min={min} max={max}/>
                    <InputNumeric className="mx-auto" placeholder="Boyunu girmelisin" min={min} max={max} value={height} setCallBackValue={setHeight}/>
                </div>
            </div>
            <div className="subText">
                <SubText text="Vücudun ile kıyafetler arasındaki ilişki her ne kadar ölçülere bağlı olarak değişse de cinsiyet tercihin beden önerisi hesabı yapmamızda ve sana doğru sorular yöneltmemizde bize yardımcı olacaktır." />

            </div>
            <div className="btn">
                <CustomButton text="Devam Et" disabled={!(height > min && height < max)} clickedOnBtn={saveSelectedAge}/>
            </div>

        </div>

    )
}