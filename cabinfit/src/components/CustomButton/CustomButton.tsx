import "./style.scss"

export default function CustomButton(props:any) {
    function customOnClick() {
        props.clickedOnBtn(props.value);
    }
    return(
        <button style={{background: props.selected ? 'white' : ''}} onClick={customOnClick} disabled={props.disabled}>
            {props.text}
        </button>
    )
}