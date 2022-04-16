import React from "react";

export default function InputNumeric(props: any) {

    return (
        <input type="number" placeholder={props.value} onChange={(e) =>   props.setCallBackValue(e.target.value)} />
    )
}