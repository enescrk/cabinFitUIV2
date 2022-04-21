import { useState } from "react";
import CustomButton from "../../components/CustomButton/CustomButton";
import SubText from "../../components/SubText/SubText";
import Title from "../../components/Title/Title";
import "./style.scss"
export default function BodyPartSelectionPage() {
    const [image, setImage] = useState({
        value: null,
        index: 0
    });
    
    function openReccomendationPage() {
        window.location.href = "/reccomendation";
     }

    function setSelectedImage(index:number) {
       setImage({
           value:null,
           index: index
       })
    }

    function saveBodypart(index:number){
        openReccomendationPage();
    }
    return(
        <div className="bodypartPage">
            <div className="title w-100">
                <Title title={"Sana En Çok Benzeyen"} />
            </div>

            <div className="imageList">
                <div className="imageItem  shadow img1" style={{opacity: image.index == 1 ? 1 : 0.7}} onClick={() => setSelectedImage(1)}>
                <img src="https://cabinfitapi.cabin.com.tr/images/themes/default/bodyparts/chest/man/7.jpg" alt="" />
                    <span className="imageText shadow">
                        Biraz Düz
                    </span>
                </div>
                <div className="imageItem  shadow img2" style={{opacity: image.index == 2 ? 1 : 0.7}} onClick={() => setSelectedImage(2)}>
                <img src="https://cabinfitapi.cabin.com.tr/images/themes/default/bodyparts/chest/man/7.jpg" alt="" />
                <span className="imageText shadow">
                        Normal
                    </span>
                </div>
                <div className="imageItem  shadow img3" style={{opacity: image.index == 3 ? 1 : 0.7}} onClick={() => setSelectedImage(3)}>
                <img src="https://cabinfitapi.cabin.com.tr/images/themes/default/bodyparts/chest/man/7.jpg" alt="" />
                <span className="imageText shadow">
                        Biraz Kavisli
                    </span>
                </div>
            </div>
            <div className="subText">
                <SubText text="Vücudun ile kıyafetler arasındaki ilişki her ne kadar ölçülere bağlı olarak değişse de cinsiyet tercihin beden önerisi hesabı yapmamızda ve sana doğru sorular yöneltmemizde bize yardımcı olacaktır." />
            </div>
            <div className="nextBtn my-auto">
                <CustomButton text="Devam Et" disabled={false} clickedOnBtn={saveBodypart}/>
            </div>
        </div>
    )
}