"use client"
import { useEffect,useState } from "react"
import { useSelector } from 'react-redux';
import Editbutton from "./Editbutton.js";
import Deletebutton from "./Deletebutton.js";
import Image from "next/image.js";

export default function Getdatas({ source,inputs,identifier }) {
    // const BACKEND_URL="http://localhost:3000"
    const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
    const [datas,setDatas]=useState([])
    const reload = useSelector((state) => state.reloader.value);

    useEffect(()=>{
        (async()=>{
           const response= await fetch(`${BACKEND_URL}/${source}`)
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
  
           inputs.map((input,i) =>  content.push(
           
            decodeURI(data[input]).includes('cloudinary') ? 
            <td className={`w-[${widthResizer}%] capitalize p-2`} key={"td"+i} >
            
            <Image alt={data[input]} src={data[input]} height={100} width={100}/>
            
            </td>

            :
           <td className={`w-[${widthResizer}%] capitalize p-2`} key={"td"+i} >
            
            {decodeURI(data[input]).length < 20 ? decodeURI(data[input]) : decodeURI(data[input]).slice(0,50)+'...' } 
            
            </td>) )   
            content.push(<td className="p-2 w-[30%]" key={i}><Editbutton source={source} entity={data} editMode={true}/> <Deletebutton source={source}  id={data[identifier]}/></td>)
           displayDatas.push(<tr key={i}>{content}</tr>)
           i++
       }
   
    }

    return (
    <>
        {displayDatas.length > 0 && displayDatas}
        {displayDatas.length == 0 && <tr className="border text-center my-5 p-2"><td colSpan={inputs.length}>Aucun enregistrement</td></tr>}

    </>
    
  )
}
