import Star from "../Star/Star";
import "./style.scss";

export default function ReccomendationCircle(props:any) {
    return (
        <div>
            <div className="circle mx-auto my-auto">
                <div className="stars">
                    <Star value={props.value}/>
                </div>

                <div className={'size'}>
                    {props.sizeName}
                </div>
            </div>
        </div>
    )
}