import React, { useEffect, useState } from "react";
import InputNumeric from "../components/InputNumeric/InputNumeric";

export default function InformationPage() {
  const [age, setAge] = useState(0);
  const [height, setHeight] = useState(1);
  const [weight, setWeight] = useState(3);


  useEffect(() => {
    // Update the document title using the browser API
    console.log(age, height, weight);
  });

  return (
    <div className="container">
      <div className="row">
        <InputNumeric value={age} type="age" setCallBackValue={setAge} />
      </div>
      <div className="row">
        <InputNumeric value={height} type="height" setCallBackValue={setHeight} />
      </div>
      <div className="row">
        <InputNumeric value={weight} type="weight" setCallBackValue={setWeight} />
      </div>
    </div>
  )
}