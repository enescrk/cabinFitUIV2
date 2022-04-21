import { useState } from "react";
import CustomButton from "../../components/CustomButton/CustomButton";
import GostNumber from "../../components/GostNumber/GostNumber";
import InputNumeric from "../../components/InputNumeric/InputNumeric";
import SubText from "../../components/SubText/SubText";
import Title from "../../components/Title/Title";
import "./style.scss";

export default function InputWeightPage() {
    const [weight, setWeight] = useState(70);
    const min = 40;
    const max = 220;

    function openCharacterPage() {
        window.location.href = "/bodypart";
     }

    function saveSelectedWeight(e:any){
        setWeight(e);
        openCharacterPage()
     }
    return (
        <div className="weightPage">
            <div className="title w-100">
                <Title title="Kaç Kilosun ?" />
            </div>
            <div className="weightMainContent">
                <img src="https://kigili.akinoncdn.com/products/2022/01/06/236834/e29beeb8-121b-4684-b999-2b4c8abf13ff_size555x830_quality90_cropCenter.jpg" alt="" className="rounded shadow my-auto mx-auto"/>
                <div className="input my-auto mx-auto">
                    <GostNumber value={weight} min={min} max={max}/>
                    <InputNumeric className="mx-auto" placeholder="Kilonu girmelisin" min={min} max={max} value={weight} setCallBackValue={setWeight}/>
                </div>
            </div>
            <div className="subText">
                <SubText text="Vücudun ile kıyafetler arasındaki ilişki her ne kadar ölçülere bağlı olarak değişse de cinsiyet tercihin beden önerisi hesabı yapmamızda ve sana doğru sorular yöneltmemizde bize yardımcı olacaktır." />

            </div>
            <div className="nextBtn">
                <CustomButton text="Devam Et" disabled={!(weight > min && weight < max)} clickedOnBtn={saveSelectedWeight}/>
            </div>

        </div>

    )
}