import "./style.scss"

export default function CustomButton(props:any) {
    return(
        <button onClick={props.clickedOnBtn} disabled={props.disabled}>
            {props.text}
        </button>
    )
}