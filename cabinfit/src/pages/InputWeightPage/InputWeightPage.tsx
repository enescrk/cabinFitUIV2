import { useContext, useEffect, useState } from "react";
import { CabinFitContext } from "../../CabinFitContext";
import CustomButton from "../../components/CustomButton/CustomButton";
import GostNumber from "../../components/GostNumber/GostNumber";
import InputNumeric from "../../components/InputNumeric/InputNumeric";
import SubText from "../../components/SubText/SubText";
import Title from "../../components/Title/Title";
import { User } from "../../models/User";
import { cabinService } from "../../services/cabinFitService";
import "./style.scss";

export default function InputWeightPage() {

    var model: User = {};
    const [userModel, setUserModel] = useContext(CabinFitContext);
    const [weight, setWeight] = useState(70);
    const min = 40;
    const max = 220;

    useEffect(() => {
        let localModel = localStorage.getItem("model");
        if (localModel) {
            model = JSON.parse(localModel);
            setUserModel(model);
            if (model.weight) {
                setWeight(model.weight);
            }
        }
    },[userModel]);

    function saveSelectedWeight() {
        model = userModel;
        model.weight = weight;
        localStorage.setItem("model", JSON.stringify(model));
        saveUser();
    }

    function saveUser() {
        let tempModel = {
            "Gender": model.gender,
            "Age": model.age,
            "Weight": model.weight,
            "Height": model.height,
            "IsActive": true
        }
        
        cabinService.saveUser(tempModel).then(res => {
           
            let response = res.data;
            model.id = response.id;
            setUserModel(model);
            localStorage.setItem("User-Id", response.Id);
            checkRequiredBodyparts();
        }).catch(err => {
        })
    }

    function checkRequiredBodyparts() {
        cabinService.checkRequiredBodyParts().then(res => {
            let response = res.data;
            if(response.length != 0){
                switch (response[0].Id) {
                    case 1:
                        window.location.href = "/chest?1";
                        break;
                    case 2:
                        window.location.href = "/waist?2";
                        break;
                    case 3:
                        window.location.href = "/hip?3";
                        break;
                    default:
                        break;
                }
            }
           
        }).catch(err => {

        })
    }
    return (
        <div className="weightPage">
            <div className="title w-100">
                <Title title="Kaç Kilosun ?" />
            </div>
            <div className="weightMainContent">
            <img src="https://static.wixstatic.com/media/c9e8c0_2327e1f107824fdfa8a62364d0fed775~mv2.gif" alt="" className="rounded my-auto mx-auto" />
                <div className="input my-auto mx-auto">
                    {/* <GostNumber value={weight} min={min} max={max} /> */}
                    <InputNumeric className="mx-auto" placeholder="Kilonu girmelisin" min={min} max={max} value={weight} setCallBackValue={setWeight} />
                </div>
            </div>
            <div className="subText">
                <SubText text="Vücudun ile kıyafetler arasındaki ilişki her ne kadar ölçülere bağlı olarak değişse de cinsiyet tercihin beden önerisi hesabı yapmamızda ve sana doğru sorular yöneltmemizde bize yardımcı olacaktır." />

            </div>
            <div className="nextBtn">
                <CustomButton text="Devam Et" disabled={!(weight > min && weight < max)} clickedOnBtn={saveSelectedWeight} />
            </div>

        </div>

    )
}