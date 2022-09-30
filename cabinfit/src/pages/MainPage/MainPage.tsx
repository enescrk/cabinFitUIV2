import IntroPage from "../IntroPage/IntroPage";
import "./style.scss"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CharacterPage from "../CharacterPage/CharacterPage";
import InputAgePage from "../InputAgePage/InputAgePage";
import InputHeightPage from "../InputHeightPage/InputHeightPage";
import InputWeightPage from "../InputWeightPage/InputWeightPage";
import BodyPartSelectionPage from "../BodyPartSelectionPage/BodyPartSelectionPage";
import ReccomendationPage from "../ReccomendationPage/ReccomendationPage";
import { cabinService } from "../../services/cabinFitService";
import { axios } from "../../services/axios";
import { useEffect, useState } from "react";

export default function MainPage() {
    const [isAvailable, setIsAvailable] = useState(false);

    const openCabinWebSite = () => {
        window.open("https://www.cabin.com.tr/")
    }

    return (
        <div >
            <header>
                <img src="https://www.blackspade.com.tr/Data/EditorFiles/banner/2022/bslogos.png" alt="brand logo" />
                <div className="action">
                    <button>Bilgi</button>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none" /><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></svg>
                    </button>
                </div>
            </header>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<IntroPage />} />
                    <Route path="/character" element={<CharacterPage />} />
                    <Route path="/age" element={<InputAgePage />} />
                    <Route path="/height" element={<InputHeightPage />} />
                    <Route path="/weight" element={<InputWeightPage />} />
                    <Route path="/chest" element={<BodyPartSelectionPage />} />
                    <Route path="/waist" element={<BodyPartSelectionPage />} />
                    <Route path="/hip" element={<BodyPartSelectionPage />} />
                    <Route path="/reccomendation" element={<ReccomendationPage />} />
                </Routes>
            </BrowserRouter>
            <footer>
                <div className="shadow cabinLabel" onClick={openCabinWebSite}>
                    <p className="my-auto">
                        Powered by CabinFit
                    </p>
                </div>
            </footer>
        </div>
    )
}