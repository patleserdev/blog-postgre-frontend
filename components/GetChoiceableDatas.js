"use client";
import { useEffect, useState } from "react";
export default function GetChoiceableDatas({
  inputs,
  source,
  counter,
  valueinselect,
  displayinselect,
  handleChoiceable,
}) {
  console.log("inputs", inputs);

  const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
  const [datas, setDatas] = useState([]);
  const [fields, setFields] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    (async () => {
      const primary = inputs.filter((input) =>
        input.type === "entity" ? input : null
      );
      if (primary.length === 1) {
        try {
          const response = await fetch(`${BACKEND_URL}/${primary[0].entity}`);
          if (response) {
            const result = await response.json();
            if (result.data) {
              //  console.log(result)
              const formattedDatas = [];
              result.data.map((e) =>
                formattedDatas.push({
                  value: e[primary[0].valueinselect],
                  display: decodeURI(e[primary[0].displayinselect]),
                })
              );
              formattedDatas.sort();
              setDatas(formattedDatas);
            }
          }
        } catch (error) {
          console.error(error);
        }
      }
    })();
  }, []);


  useEffect(() => {
    if (datas) {
      const secondary = inputs.filter((input) =>
        input.type !== "entity" ? input : null
      );

      if (secondary.length > 0) {
        setFields(secondary)
      }
    }
  }, [datas]);

  console.log('fields',fields)
  const displayFields=[]
    fields.map((field)=>{
        {field.type == 'number' && 
    displayFields.push(
            <div className="w-1/4  flex flex-row items-center justify-center">
            <input className="w-full " type="number" 
              onChange={(e) => handleChange(e)} />
            </div>
            
    )
}
}
    )
  console.log(displayFields)

  const handleChange = (e) => {
    console.log(e.target.value);
    console.log(e.target.checked);

    if (e.target.checked) {
      //add
      setSelected((prev) => [...prev, e.target.value]);
    } else {
      //remove
      const filtered = selected.filter((one) => one != e.target.value);
      setSelected(filtered);
    }
  };

  handleChoiceable(source, selected);
  const displayDatas = [];
  // displayDatas.push(<option value="" disabled key="selector">Sélectionnez</option>)
  // datas.map((e)=> displayDatas.push({value:e,label:e}))
  if (datas != undefined && datas.length > 0) {
    datas.map((entity, i) =>
      displayDatas.push(
        <div
          key={i}
          className="w-full border flex flex-row items-center justify-center"
        >
          <div className="w-1/2  flex flex-row items-center justify-center">
            <input
              className="w-1/3"
              type="checkbox"
              key={counter + i}
              value={entity.value}
              onChange={(e) => handleChange(e)}
              field={entity.field}
            />
            <label className="w-2/3 normal-case">{entity.display}</label>
          </div>

         {displayFields}

          <div className="w-1/4  flex flex-row items-center justify-center">
            <select className="w-full border">
              <option>Option1</option>
              <option>Option2</option>
            </select>
          </div>
        </div>
      )
    );
  }

  return displayDatas;
}
