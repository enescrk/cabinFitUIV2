import {useEffect, useState} from "react";
import CustomButton from "../../components/CustomButton/CustomButton";
import ReccomendationCircle from "../../components/RecommendationCircle/ReccomendationCircle";
import SubText from "../../components/SubText/SubText";
import Title from "../../components/Title/Title";
import {cabinService} from "../../services/cabinFitService";
import "./style.scss"

export default function ReccomendationPage() {

    const [data, setData] = useState<any[]>([]);
    const [primaryBodyPart, setPrimaryBodyPart] = useState<number | null | any>(null);
    const [preference, setPreference] = useState(0);
    const [recommendedSize, setRecommendedSize] = useState<any>(null);

    const bodyPartsName = ['Göğüs', 'Bel', 'Basen'];
    useEffect(() => {
        cabinService.getFitness().then((res) => {
            setData(res.data.Product.Sizes);
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    function getRecomendedSize() {
        if (data.length != 0) {
            data.sort((a, b) => (a.Preferences[preference].Fitness > b.Preferences[preference].Fitness) ? 1 : ((b.Preferences[preference].Fitness > a.Preferences[preference].Fitness) ? -1 : 0));

            if (primaryBodyPart !== null) {
                let primaryRecommendation = data[data.length - 1];
                let secondaryRecommendation = data[data.length - 2] ?? null;
                let thirdthRecommendation = data[data.length - 3] ?? null;
                let tempData = [primaryRecommendation, secondaryRecommendation, thirdthRecommendation];

                if (typeof (primaryBodyPart) == "number") {
                    tempData.sort((a, b) => (a.Preferences[preference].Bodyparts[primaryBodyPart].Fitness > b.Preferences[preference].Bodyparts[primaryBodyPart].Fitness) ? 1 : ((b.Preferences[preference].Bodyparts[primaryBodyPart].Fitness > a.Preferences[preference].Bodyparts[primaryBodyPart].Fitness) ? -1 : 0));
                    setRecommendedSize(tempData[tempData.length - 1])
                }
            } else {
                setRecommendedSize(data[data.length - 1])
            }

        }
    }

    useEffect(() => {
        getRecomendedSize();
    }, [data, primaryBodyPart,preference])

    const changePrimaryBodyPart = (e: number) => {
        setPrimaryBodyPart(e);
    }


    // @ts-ignore
    return (
        <div className="reccomendationPage">
            <div className="title">
                <Title title={"Hesaplamalarımızı tamamladık. Sana en uygun beden..."}/>
            </div>
            <div className="subText">
                <SubText
                    text="Vücut ölçülerinizi, ürün kalıp ölçülerini, daha önceki tercihlerinizi ve sizle aynı seçimleri yapmış kullanıcıların satış verilerini kullanarak size en uygun bedeni bulduk."/>
            </div>
            <div className="circleAndBtn mx-auto">
                <div className="circle my-auto">
                    <ReccomendationCircle sizeName={recommendedSize?.Name}
                                          value={recommendedSize?.Preferences[preference].Fitness}/>
                </div>
                <div className="buttons my-auto">
                    {
                        recommendedSize?.Preferences[preference].Bodyparts.filter((part:any) => part.Id === 1).length === 1 && (
                            <CustomButton selected={primaryBodyPart === 0} className={"chest"} text={"Göğüs"} value={0} clickedOnBtn={changePrimaryBodyPart}/>
                        )
                    }
                    {
                        recommendedSize?.Preferences[preference].Bodyparts.filter((part:any) => part.Id === 2).length === 1 && (
                            <CustomButton selected={primaryBodyPart === 1} className="waist" text={"Bel"} value={1} clickedOnBtn={changePrimaryBodyPart}/>
                        )
                    }
                    {
                        recommendedSize?.Preferences[preference].Bodyparts.filter((part:any) => part.Id === 3).length === 1 && (
                            <CustomButton selected={primaryBodyPart === 2} className="hip" text={"Basen"} value={2} clickedOnBtn={changePrimaryBodyPart}/>
                        )
                    }


                </div>
            </div>

            {
                primaryBodyPart != null && (
                    <div className={"selectedAreaBox shadow p-3 my-auto mx-auto"}>
                <span className="priorityPartText">
                    Öncelikli bölgem <b className="bodyPart">{bodyPartsName[primaryBodyPart]}</b>
                    <div style={{border: 'none',backgroundColor: 'transparent', display: 'inline-block', cursor: 'pointer', float: 'right'}} onClick={() => setPrimaryBodyPart(null)}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none" /><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></svg>
                    </div>
                </span>
                        <p className="mx-auto">
                            {recommendedSize?.Name} beden {bodyPartsName[primaryBodyPart]} bölgeniz
                            için <b> %{Math.round(recommendedSize.Preferences[preference].Bodyparts[primaryBodyPart].Fitness)} oranla </b> en
                            uygun beden olarak hesaplandı.
                        </p>
                    </div>
                )
            }


            <div className={"preferenceBtns"}>
                <button disabled={!recommendedSize?.Preferences[1]} className={preference === 1 ? "btn left selected" : "btn left"} type="button" onClick={() => setPreference(1)}>
                    Biraz Dar
                </button>
                <button disabled={!recommendedSize?.Preferences[0]} className={preference === 0 ? "btn selected" : "btn"} type="button" onClick={() => setPreference(0)}>
                    Normal
                </button>
                <button disabled={!recommendedSize?.Preferences[2]} className={preference === 2 ? "btn selected right" : "btn right"} type="button" onClick={() => setPreference(2)}>
                    Biraz Bol
                </button>
            </div>


        </div>
    )
}