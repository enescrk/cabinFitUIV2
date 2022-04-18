import "./style.scss"

export default function GostNumber(props: any) {
    return (
        <div>
            {
                ( props.value > props.min && props.value < props.max) ? <div className="numbers">
                    <span className="first">
                        {props.value}
                    </span>
                    <span className="second">
                        {props.value}
                    </span>
                    <span className="third">
                        {props.value}
                    </span>
                </div> :  <span className="error"> {props.value && props.value > 10 ? `Gireceğiniz değer ${props.min} ile ${props.max} arasında olmalıdır.` : ''}  </span>
            }


        </div>

    )
}