import React, { useEffect, useState } from "react";
import "./style.scss"
export default function InputNumeric(props: any) {
    const [border, setBorder] = useState("none");

    function handleValue(e: any) {
        e = Number(e);
        if(e == 0) {
            e = null
            setBorder("none");
        }else{
            if (e < props.max && e > props.min) {
                setBorder("3px solid green");
            }
        }
        props.setCallBackValue(e);
        
    }



    return (
        <input type="number" style={{ border: border }} placeholder={props.placeholder} value={props.value} min={props?.min} max={props.max} onChange={(e) => handleValue(e.target.value)} />
    )
}