import { useContext, useEffect, useState } from "react";
import { CabinFitContext } from "../../CabinFitContext";
import CustomButton from "../../components/CustomButton/CustomButton";
import GostNumber from "../../components/GostNumber/GostNumber";
import InputNumeric from "../../components/InputNumeric/InputNumeric";
import SubText from "../../components/SubText/SubText";
import Title from "../../components/Title/Title";
import { User } from "../../models/User";
import "./style.scss";

export default function InputAgePage(props: any) {

    var model: User = {};

    const [userModel, setUserModel] = useContext(CabinFitContext);

    const [age, setAge] = useState(25);
    const min = 18;
    const max = 100;

    useEffect(() => {
        let localModel = localStorage.getItem("model");
        if (localModel) {
            model = JSON.parse(localModel);
            setUserModel(model);
            if (model.age) {
                setAge(model.age);
            }
        }
    }, [userModel]);

    function openCharacterPage() {
        window.location.href = "/height";
    }

    function saveSelectedAge() {
        model = userModel;
        model.age = age;
        setUserModel(model);

        localStorage.setItem("model", JSON.stringify(model));

        openCharacterPage()
    }
    return (
        <div className="agePage">
            <div className="title w-100">
                <Title title="Kaç Yaşındasın ?" />
            </div>
            <div className="ageMainContent">
                <img src="https://media0.giphy.com/media/Uv1ofVjYq3z1Vo73fZ/200w.gif?cid=82a1493b14c9llt6h4swnth645rs1c5aw6gobfnzonqbz097&rid=200w.gif&ct=s" alt="" className="rounded  my-auto mx-auto" />
                <div className="input my-auto mx-auto">
                    {/* <GostNumber value={age} min={min} max={max} /> */}
                    <InputNumeric className="mx-auto" placeholder="Yaşını girmelisin" min={min} max={max} value={age} setCallBackValue={setAge} />
                </div>
            </div>
            <div className="subText">
                <SubText text="Yaşın vücut bölgelerindeki değişimi doğrudan etikler. Bununla birlikte seninle aynı yaş grubundaki kişileri tecrübelerine dayanarak sana daha doğru bir öneride bulunabiliriz." />

            </div>
            <div className="nextBtn">
                <CustomButton text="Devam Et" disabled={!(age > min && age < max)} clickedOnBtn={saveSelectedAge} />
            </div>

        </div>

    )
}