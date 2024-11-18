import { useState } from "react";
import { datas } from "../datas";
import Getdatas from "./Getdatas"
import { reloading } from "../reducers/reloader";
import { useSelector, useDispatch } from "react-redux";
export default function List({ schema }) {
  const dispatch = useDispatch();
  const reload = useSelector((state) => state.reloader.value);
  
  const [filter,setFilter]=useState("")

    const displayLabel=datas.map((e,i)=> e.source == schema ? <h2 key={i} className="text-xl">Liste des {e.label}</h2> : null)

    const displayHead=datas.map((e,i)=> e.source == schema ? e.inputs.map((input,i)=> input.display ? <th className="text-left capitalize p-2" key={i}>{input.label}</th>:null) : null)

    displayHead.push(<th key={999} className="text-center">Actions</th>)
    const inputs=[]
    const displayInputs=[]
    let identifier=""
    datas.map((e)=> e.source == schema ? e.inputs.map((input)=> input.display ? decodeURI(inputs.push(input.display)):null) : null)
    datas.map((e)=> e.source == schema ? e.inputs.map((input)=> input.display ? decodeURI(displayInputs.push({label:input.label, field:input.field})):null) : null)

    datas.map((e)=> e.source == schema ? identifier = e.identifier : null)
    // const displayinselect=  datas.map((e)=> e.source == schema ? e.displayinselect : null)
    const handleToFilter=(e)=>{
      e.preventDefault()
      setFilter(e.target.value)
      dispatch(reloading(!reload));
      
    }
    console.log(filter)

  return (
    <div className="p-2 mt-5 z-0 w-fit flex flex-col items-start justify-center ">
      {displayLabel}
      <h4>
        Filtrer par
        
        <select className="m-2 p-1 text-slate-500" onChange={(e)=>handleToFilter(e)}>
          <option value="">Sans filtre</option>
        {displayInputs.map((input,i)=><option key={i} value={input.field}>{input.label}</option>)}
        </select>
      </h4>
      <table className="w-full table-auto md:table-fixed border my-2 ">
        <thead className="border-b-2">
          <tr className="text-left bg-slate-500">
          {displayHead}
          </tr>
        </thead>
        <tbody>
        <Getdatas source={schema} inputs={inputs} filter={filter} identifier={identifier}/>
        </tbody>
      </table>
      
    </div>
  );
}
