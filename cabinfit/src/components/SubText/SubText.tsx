import "./style.scss"

export default function SubText(props: any) {
    return (
        <div className="subText">
            <p>
                {props.text}
            </p>
        </div>

    )
}