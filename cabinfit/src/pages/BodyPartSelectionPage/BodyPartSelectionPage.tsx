import { useEffect, useState } from "react";
import CustomButton from "../../components/CustomButton/CustomButton";
import SubText from "../../components/SubText/SubText";
import Title from "../../components/Title/Title";
import { Bodypart } from "../../models/Bodypart";
import { User } from "../../models/User";
import { cabinService } from "../../services/cabinFitService";
import "./style.scss"

export interface ImgArr {
    Value: number;
    Url: string
}
export default function BodyPartSelectionPage() {

    const [image, setImage] = useState({
        value: 0,
        index: 0
    });
    const [imgArr, setImgArr] = useState([
        {
            Value: 0,
            Url: ""
        }
    ]);
    var bodyPart : any = null;

    useEffect(() => {
         bodyPart = window.location.search.slice(1, 2);
       
     fetchBodypartOptions(parseInt(bodyPart));
    }, []);

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
            }else{
                openReccomendationPage();
            }
           
        }).catch(err => {

        })
    }

    function fetchBodypartOptions(id: number) {
        cabinService.getBodypartOptions(id).then(res => {
           setImgArr(res.data.Options);
        }).catch(err => {
        })
    }

    function openReccomendationPage() {
        window.location.href = "/reccomendation";
    }

    function setSelectedImage(index: number) {
        setImage({
            value: imgArr[index -1].Value,
            index: index
        })
    }

    function saveBodypart() {
        let tempModel = [
            {
                Value: image.value,
                Id: parseInt(window.location.search.slice(1, 2)) 
            }
        ]
        cabinService.saveBodyPart(tempModel).then(res => {
            checkRequiredBodyparts();
        }).catch(err => {
            throw(err);
        })
        
    }

    return  (
        <div className="bodypartPage">
          
            <div className="title w-100">
                <Title title={"Sana En Çok Benzeyen"} />
            </div>

            {imgArr.length == 3 && <div className="imageList">
                <div className="imageItem  shadow img1" style={{ opacity: image.index == 1 ? 1 : 0.7 }} onClick={() => setSelectedImage(1)}>
                    <img src={imgArr[0].Url} alt="img1" />
                    <span className="imageText shadow">
                        Biraz Düz
                    </span>
                </div>
                <div className="imageItem  shadow img2" style={{ opacity: image.index == 2 ? 1 : 0.7 }} onClick={() => setSelectedImage(2)}>
                    <img src={imgArr[1].Url} alt="img2" />
                    <span className="imageText shadow">
                        Normal
                    </span>
                </div>
                <div className="imageItem  shadow img3" style={{ opacity: image.index == 3 ? 1 : 0.7 }} onClick={() => setSelectedImage(3)}>
                    <img src={imgArr[2].Url} alt="img3" />
                    <span className="imageText shadow">
                        Biraz Kavisli
                    </span>
                </div>
            </div>}

            <div className="subText">
                <SubText text="Vücudun ile kıyafetler arasındaki ilişki her ne kadar ölçülere bağlı olarak değişse de cinsiyet tercihin beden önerisi hesabı yapmamızda ve sana doğru sorular yöneltmemizde bize yardımcı olacaktır." />
            </div>
            <div className="nextBtn my-auto">
                <CustomButton text="Devam Et" disabled={false} clickedOnBtn={saveBodypart} />
            </div>
        </div> 
    )
}