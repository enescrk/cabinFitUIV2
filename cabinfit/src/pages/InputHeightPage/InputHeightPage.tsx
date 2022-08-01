import { useContext, useEffect, useState } from "react";
import { CabinFitContext } from "../../CabinFitContext";
import CustomButton from "../../components/CustomButton/CustomButton";
import GostNumber from "../../components/GostNumber/GostNumber";
import InputNumeric from "../../components/InputNumeric/InputNumeric";
import SubText from "../../components/SubText/SubText";
import Title from "../../components/Title/Title";
import { User } from "../../models/User";
import "./style.scss";

export default function InputHeightPage() {
    const [height, setHeight] = useState(170);
    const min = 140;
    const max = 220;
    var model: User = {};
    const [userModel, setUserModel] = useContext(CabinFitContext);

    useEffect(() => {
        let localModel = localStorage.getItem("model");
        if (localModel) {
            model = JSON.parse(localModel);
            setUserModel(model);
            if (model.height) {
                setHeight(model.height);
            }
        }
    },[userModel]);

    

    function openCharacterPage() {
        window.location.href = "/weight";
    }

    function saveSelectedAge() {
        model = userModel;
        model.height = height;
        setUserModel(model);

        localStorage.setItem("model", JSON.stringify(model));
        openCharacterPage()
    }
    return (
        <div className="heightPage">
            <div className="title w-100">
                <Title title="Boyun Ne Kadar Uzun ?" />
            </div>
            <div className="heightMainContent">
            <img src="https://media.baamboozle.com/uploads/images/275254/1613435667_7277_gif-url.gif" alt=""  className="rounded  my-auto mx-auto" />
                <div className="input my-auto mx-auto">
                    {/* <GostNumber value={height} min={min} max={max} /> */}
                    <InputNumeric className="mx-auto" placeholder="Boyunu girmelisin" min={min} max={max} value={height} setCallBackValue={setHeight} />
                </div>
            </div>
            <div className="subText">
                <SubText text="Vücudun ile kıyafetler arasındaki ilişki her ne kadar ölçülere bağlı olarak değişse de cinsiyet tercihin beden önerisi hesabı yapmamızda ve sana doğru sorular yöneltmemizde bize yardımcı olacaktır." />

            </div>
            <div className="nextBtn">
                <CustomButton text="Devam Et" disabled={!(height > min && height < max)} clickedOnBtn={saveSelectedAge} />
            </div>

        </div>

    )
}