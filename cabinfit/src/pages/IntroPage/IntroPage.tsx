import React from "react";
import { NavLink, Route } from "react-router-dom";
import CustomButton from "../../components/CustomButton/CustomButton";
import "./style.scss"
export default function IntroPage() {

    function openCharacterPage() {
       window.location.href = "/character";
    }

    return (
        <div >
            <section>
                <div className="bigTitle">
                    <span>En Uygun</span> <br />
                    <span>Bedeni Bulmaya</span> <br />
                    <span className="whiteColor">Hazır Mısın ?</span>
                </div>
                <img src="https://www.cabin.com.tr/assets/landingImage.svg" alt="intro image" />

                <p>
                    CabinFit ile kendi vücut ölçüleriniz ve tercihlerinize göre size en uygun bedeni bulmak üzeresin. Mağazadaki kabin deneyimini online ortamda CabinFit ile yaşayabilirsin. %95 doğruluk oranı ile birkaç pratik soru ile seni daha iyi tanımak istiyoruz. Hazırsan...
                </p>

                <div className="customBtn">
                    <CustomButton text="Hemen Başlayalım" clickedOnBtn={openCharacterPage} disabled={false} />
                </div>

            </section>
        </div>
    )
}