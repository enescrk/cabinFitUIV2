import Star from "../Star/Star";
import "./style.scss";

export default function ReccomendationCircle() {
    return (
        <div>
            <div className="circle mx-auto my-auto">

                <div className="stars">
                    <Star />
                </div>

                <div className="size">
                    M
                </div>
            </div>
        </div>
    )
}