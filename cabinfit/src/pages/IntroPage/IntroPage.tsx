import React from "react";
import CustomButton from "../../components/CustomButton/CustomButton";
import "./style.scss"
export default function IntroPage() {

    function clickedOnBtn() {

    }

    return (
        <div >
            <section>
                <div className="bigTitle">
                    <span>En Uygun</span> <br />
                    <span>Bedeni Bulmaya</span> <br />
                    <span className="whiteColor">Hazır Mısın ?</span>
                </div>
                <img src="https://www.yatasbedding.com.tr/Themes/Yatas/Content/survey/static/media/home-sleep2.png" alt="intro image" />

                <p>
                    CabinFit ile kendi vücut ölçüleriniz ve tercihlerinize göre size en uygun bedeni bulmak üzeresin. Mağazadaki kabin deneyimini online ortamda CabinFit ile yaşayabilirsin. %95 doğruluk oranı ile birkaç pratik soru ile seni daha iyi tanımak istiyoruz. Hazırsan...
                </p>

                <div className="customBtn">
                    <CustomButton text="Hemen Başlayalım" clickedOnBtn={clickedOnBtn} disabled={false} />
                </div>

            </section>
        </div>
    )
}