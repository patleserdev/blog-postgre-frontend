import { datas } from "../datas";
import Getdatas from "./Getdatas"

export default function List({ schema }) {

    const displayLabel=datas.map((e,i)=> e.source == schema ? <h2 key={i} className="text-lg">Liste des {e.label}</h2> : null)

    const displayHead=datas.map((e,i)=> e.source == schema ? e.inputs.map((input,i)=> <th className="capitalize" key={i}>{input.label}</th>) : null)

    displayHead.push(<th key={999} className="text-center">Actions</th>)
    const inputs=[]
    let identifier=""
    datas.map((e)=> e.source == schema ? e.inputs.map((input)=> decodeURI(inputs.push(input.field))) : null)
    datas.map((e)=> e.source == schema ? identifier = e.identifier : null)
    // const displayinselect=  datas.map((e)=> e.source == schema ? e.displayinselect : null)

  return (
    <div className="border min-w-[50vw] p-2 mt-5">
      {displayLabel}
      <h4>
        Filtrer par <input type="text" />
      </h4>
      <table className="table border w-full my-2">
        <thead>
          <tr className="text-left">
          {displayHead}
          </tr>
        </thead>
        <tbody>
        <Getdatas source={schema} inputs={inputs} identifier={identifier}/>
        </tbody>
      </table>
      
    </div>
  );
}
