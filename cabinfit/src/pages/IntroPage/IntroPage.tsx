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
                    Bilinçsiz ve deneme yanılma yöntemleriyle yapılan yatak seçimini engellemek amacıyla, Yataş Uyku Laboratuvarı tarafından hazırlanan DOĞRU YATAK BULMA SİSTEMİ SMART MATCH'E giriş yapmak üzeresiniz.

                    Yataş yataklarının %97,8 oranındaki müşteri memnuniyetini %100’e yükseltmeyi amaçlayan Smart Match sistemi; ilerleyen adımlarda bizimle paylaşacağınız size özel bilgileri ve uyku ihtiyaçlarınızı yapılan araştırma ve testler sonucunda belirlenen algoritmalar ile değerlendirerek sizin için en doğru yatağı önerir.
                </p>

                <div className="customBtn">
                <CustomButton  text="Hemen Başlayalım" clickedOnBtn={clickedOnBtn} disabled={false} />
                </div>
                
            </section>
        </div>
    )
}