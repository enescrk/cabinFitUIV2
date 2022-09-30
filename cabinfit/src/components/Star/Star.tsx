import "./style.scss";

export default function Star(props:any) {
    return(
        <div>
            <div>
               % {Math.round(props.value)}
            </div>
            {
                Math.round(props.value) > 60 && (
                    <i className="fa-solid fa-star"></i>
                )
            }
            {
                Math.round(props.value) > 60 &&  Math.round(props.value)< 65 && (
                    <i className="fa-solid fa-star-half"></i>
                )
            }
            {
                Math.round(props.value) > 70 && (
                    <i className="fa-solid fa-star"></i>
                )
            }
            {
                Math.round(props.value) > 70 &&  Math.round(props.value)< 75 && (
                    <i className="fa-solid fa-star-half"></i>
                )
            }
            {
                Math.round(props.value) > 80 && (
                    <i className="fa-solid fa-star"></i>
                )
            }
            {
                Math.round(props.value) > 80 &&  Math.round(props.value)< 85 && (
                    <i className="fa-solid fa-star-half"></i>
                )
            }
            {
                Math.round(props.value) > 90 && (
                    <i className="fa-solid fa-star"></i>
                )
            }
            {
                Math.round(props.value) > 90 &&  Math.round(props.value) < 95 && (
                    <i className="fa-solid fa-star-half"></i>
                )
            }
            {
                Math.round(props.value) > 95 && (
                    <i className="fa-solid fa-star"></i>
                )
            }

        </div>
    )
}