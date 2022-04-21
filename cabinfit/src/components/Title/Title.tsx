import "./style.scss"

export default function Title(props:any) {
    return(
       <h2 className="mx-auto">
           {props.title}
       </h2>
    )
}