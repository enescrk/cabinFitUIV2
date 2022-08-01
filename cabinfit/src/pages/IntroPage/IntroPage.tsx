import React, { useContext, useEffect } from "react";
import { NavLink, Route } from "react-router-dom";
import CustomButton from "../../components/CustomButton/CustomButton";
import { cabinService } from "../../services/cabinFitService";
import "./style.scss"
import { CabinFitContext } from "../../CabinFitContext";
export default function IntroPage() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    useEffect(() => {
        checkProductIsAvailable();
    }, []);

    function openCharacterPage() {
        window.location.href = "/character";
    }

    function setProductCodeFromUrl() {
      return urlParams.get('productCode')
    }
    
    //#region "Ürünün Cabin Sisteminde olup olmadığında bakar yoksa bulunamadı sayfasında yönlendirir."
    function checkProductIsAvailable() {
        let productCode = setProductCodeFromUrl() ?? "test";
        
        cabinService.isProductAvailable(productCode).then(res => {
            let productId = res.data.Product.Id;
            localStorage.setItem("productId", productId);
        }).catch(err => {
            window.location.href = "/notfound";
        })
    }
    //#endregion

    return (
        <div>
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