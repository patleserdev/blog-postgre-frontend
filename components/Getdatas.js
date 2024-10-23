"use client"
import { useEffect,useState } from "react"
import { useSelector } from 'react-redux';
import Editbutton from "./Editbutton.js";
import Deletebutton from "./Deletebutton.js";

export default function Getdatas({ source,inputs,identifier }) {
    const URL_BACKEND="http://localhost:3000"
    const [datas,setDatas]=useState([])
    const reload = useSelector((state) => state.reloader.value);

    useEffect(()=>{
        (async()=>{
           const response= await fetch(`${URL_BACKEND}/${source}`)
            if(response)
            {
                const result = await response.json()
                if(result)
                {
                    console.log(result)
                    setDatas(result.data)
                }
               
            }
        })()
    },[reload])

    const displayDatas=[]
    let i=0
    if(datas)
    {
      for(let data of datas)
        {
           let content=[]
           let widthResizer=(100/inputs.length)
  
           inputs.map((input,i) =>  content.push(<td className={`w-[${widthResizer}%] capitalize`} key={"td"+i} >
            {decodeURI(data[input]).length < 20 ? decodeURI(data[input]) : decodeURI(data[input]).slice(0,25)+'...' } 
            
            </td>) )   
            content.push(<td className="w-[30%]" key={i}><Editbutton source={source} entity={data}/> <Deletebutton source={source}  id={data[identifier]}/></td>)
           displayDatas.push(<tr key={i}>{content}</tr>)
           i++
       }
   
    }

    return (
    <>
        {displayDatas.length > 0 && displayDatas}
        {displayDatas.length == 0 && <tr className="border text-center my-5"><td colSpan={inputs.length}>Aucun enregistrement</td></tr>}

    </>
    
  )
}
