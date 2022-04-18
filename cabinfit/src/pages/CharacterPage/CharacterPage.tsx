import { useState } from "react";
import CustomButton from "../../components/CustomButton/CustomButton"
import SubText from "../../components/SubText/SubText";
import Title from "../../components/Title/Title"
import "./style.scss"

export default function CharacterPage() {
    const [character, setCharacter] = useState({
        gender: 0,
        characterIndex: 0
    });

    const [selectedCharacter, setSelectedCharacted] = useState({
        src: "https://www.yatasbedding.com.tr/Themes/Yatas/Content/Survey/static/media/kiz_mouse_over.gif",
        gender: 1,
        index: 0
    })

    const saveSelectedCharacter = () => {
        localStorage.setItem("character", JSON.stringify(character));
    }

    const characterList = [
        {
            src: "https://www.yatasbedding.com.tr/Themes/Yatas/Content/Survey/static/media/kiz_mouse_over.gif",
            gender: 1,
            index: 0
        },
        {
            src: "https://www.yatasbedding.com.tr/Themes/Yatas/Content/Survey/static/media/oglan_mouse_over.gif",
            gender: 2,
            index: 1
        },
        {
            src: "https://www.yatasbedding.com.tr/Themes/Yatas/Content/Survey/static/media/gozluklu_mouse_over.gif",
            gender: 1,
            index: 2
        },
        {
            src: "https://www.yatasbedding.com.tr/Themes/Yatas/Content/Survey/static/media/kadin_mouse_over.gif",
            gender: 2,
            index: 3
        },
    ]

    function prew() {
        let i = selectedCharacter.index == 0 ? 3 : selectedCharacter.index - 1
        setSelectedCharacted(characterList[i])
    }
    function next() {
        let i = selectedCharacter.index == 3 ? 0 : selectedCharacter.index + 1
        setSelectedCharacted(characterList[i])
    }

    return (
        <div className="characterPage">
            <div className="title w-100">
                <Title title="Karakterini Seç" />
            </div>

            <div className="characterList">
                <div className="characterItem c-1">
                    <img className="characterImage" src="https://www.yatasbedding.com.tr/Themes/Yatas/Content/Survey/static/media/kiz_mouse_over.gif" alt="" />

                    <div className=" characterSelectCircle mx-auto" style={{ backgroundColor: character.characterIndex == 1 ? '#6DCCDC' : '' }} onClick={() => setCharacter({ gender: 1, characterIndex: 1 })}>
                    </div>
                </div>
                <div className="characterItem c-2">
                    <img className="characterImage" src="https://www.yatasbedding.com.tr/Themes/Yatas/Content/Survey/static/media/oglan_mouse_over.gif" alt="" />

                    <div className=" characterSelectCircle mx-auto" style={{ backgroundColor: character.characterIndex == 2 ? '#6DCCDC' : '' }} onClick={() => setCharacter({ gender: 2, characterIndex: 2 })}>
                    </div>
                </div>
                <div className="characterItem c-3">
                    <img className="characterImage" src="https://www.yatasbedding.com.tr/Themes/Yatas/Content/Survey/static/media/gozluklu_mouse_over.gif" alt="" />

                    <div className=" characterSelectCircle mx-auto" style={{ backgroundColor: character.characterIndex == 3 ? '#6DCCDC' : '' }} onClick={() => setCharacter({ gender: 1, characterIndex: 3 })}>
                    </div>
                </div>
                <div className="characterItem c-4">
                    <img className="characterImage" src="https://www.yatasbedding.com.tr/Themes/Yatas/Content/Survey/static/media/kadin_mouse_over.gif" alt="" />

                    <div className=" characterSelectCircle mx-auto" style={{ backgroundColor: character.characterIndex == 4 ? '#6DCCDC' : '' }} onClick={() => setCharacter({ gender: 1, characterIndex: 4 })}>
                    </div>
                </div>
            </div>

            <div className="characterListMobil">
                <div className="characterItemMobil">
                    <img className="characterImage my-auto" src={selectedCharacter.src} alt="" />
                    <div className="prew my-auto" onClick={prew}>
                        <i className="fa-solid fa-circle-chevron-left fa-xl"></i>
                    </div>
                    <div className="next my-auto" onClick={next}>
                        <i className="fa-solid fa-circle-chevron-right fa-xl"></i>
                    </div>
                </div>
            </div>


            <div className="subText">
                <SubText text="Vücudun ile kıyafetler arasındaki ilişki her ne kadar ölçülere bağlı olarak değişse de cinsiyet tercihin beden önerisi hesabı yapmamızda ve sana doğru sorular yöneltmemizde bize yardımcı olacaktır." />

            </div>

            <div className="customBtn">
                <CustomButton text="Devam Edelim" clickedOnBtn={saveSelectedCharacter} disabled={false} />
            </div>


        </div>
    )
}