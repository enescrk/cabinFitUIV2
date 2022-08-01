import React, { useState, createContext, useContext } from "react";
import { User } from "./models/User";

export const CabinFitContext = createContext();

export const CabinFitProvider = (props) => {

    const [age, setAge] = useState();
    const [gender, setGender] = useState();
    const changeAge = (age) => setAge(age);
    const changeGender = (gender) => setGender(gender);
    const bodyParts = {
        chest: {
            id: 0,
            value: null
        },
        waist: {
            id: 0,
            value: null
        },
        hip: {
            id: 0,
            value: null
        }
    };
    const [userModel, setUserModel] = useState({
        id: null,
        gender: gender,
        height: null,
        weight: null,
        age: age,
        measures: bodyParts,
        isActive: false
    });
    return (
        <CabinFitContext.Provider value={[userModel, setUserModel]}>
            {props.children}
        </CabinFitContext.Provider>
    )
}