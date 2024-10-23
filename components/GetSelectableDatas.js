"use client"
import { useEffect,useState } from "react"
export default function GetSelectableDatas({ source,counter,valueinselect,displayinselect }) {
    const URL_BACKEND="http://localhost:3000"
    const [datas,setDatas]=useState([])

    useEffect(()=>{

        (async()=>{
           const response= await fetch(`${URL_BACKEND}/${source}`)
            if(response)
            {
                const result = await response.json()
                if(result)
                {
                    //  console.log(result)
                    const formattedDatas=[]
                    result.data.map((e)=> formattedDatas.push({value:e[valueinselect],display:decodeURI(e[displayinselect])}))
                    formattedDatas.sort()
                    setDatas(formattedDatas)
                 
                }
               
            }
        })()
    },[])

    const displayDatas=[]
    // displayDatas.push(<option value="" disabled key="selector">Sélectionnez</option>)
    // datas.map((e)=> displayDatas.push({value:e,label:e}))
    datas.map((e,i)=> displayDatas.push(<option className="capitalize" key={counter+i} value={e.value}>{e.display}</option>))


    return displayDatas
        
   
  
}
