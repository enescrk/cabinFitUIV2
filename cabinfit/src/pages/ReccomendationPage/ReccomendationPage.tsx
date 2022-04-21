import { useEffect, useState } from "react";
import CustomButton from "../../components/CustomButton/CustomButton";
import ReccomendationCircle from "../../components/RecommendationCircle/ReccomendationCircle";
import SubText from "../../components/SubText/SubText";
import Title from "../../components/Title/Title";
import "./style.scss"

export default function ReccomendationPage() {

    return (
        <div className="reccomendationPage">
            <div className="title">
                <Title title={"Hesaplamalarımızı tamamladık. Sana en uygun beden..."} />
            </div>
            <div className="subText">
                <SubText text="Vücut ölçülerinizi, ürün kalıp ölçülerini, daha önceki tercihlerinizi ve sizle aynı seçimleri yapmış kullanıcıların satış verilerini kullanarak size en uygun bedeni bulduk." />
            </div>
            <div className="circleAndBtn mx-auto">
                <div className="circle my-auto">
                    <ReccomendationCircle />
                </div>
                <div className="buttons my-auto">
                    <CustomButton className="chest" text={"Göğüs"} />
                    <CustomButton className="waist" text={"Bel"} />
                    <CustomButton className="hip" text={"Basen"} />
                </div>
            </div>

            <div className="selectedAreaBox shadow p-3 my-auto mx-auto">
                <span className="priorityPartText">
                    Öncelikli bölgem <b className="bodyPart">Göğüs</b>
                </span>
                <p className="mx-auto">
                    Beden önerisi alırken ürünün öncelikle göğüs bölgeme uygun ölçülerde olmasını istiyorum.
                </p>
            </div>

            <div className="preferenceBtns">
                <div className="btn left">
                    Biraz Dar
                </div>
                <div className="btn selected">
                    Normal
                </div>
                <div className="btn right">
                    Biraz Bol
                </div>
            </div>


        </div>
    )
}