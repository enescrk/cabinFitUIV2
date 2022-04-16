import IntroPage from "../IntroPage/IntroPage";
import "./style.scss"
export default function MainPage() {

    return(
        <div >
             <header>
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c2/Ki%C4%9F%C4%B1l%C4%B1_logo.png" alt="brand logo" />
                <div className="action">
                    <button>Info</button>
                    <button>close</button>
                </div>
            </header>
            <IntroPage></IntroPage>
            <footer>
                <div className="shadow cabinLabel w-25 ">
                    <p className="my-auto">
                        Powered by CabinFit
                    </p>
                </div>
            </footer>
        </div>
    )
}