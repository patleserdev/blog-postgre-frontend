import {datas} from '@/datas'

export default async function getSitemap(req, res)
 {
  const mappedDatas=[]
  for(let data of datas)
  {
    if(data.mapped)
    {
        const response= await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/${data.source}`)
        if(response)
        {
            const result = await response.json()
            if(result)
            {
                 
                 result.data.map((e => mappedDatas.push({
                  entity:data.mappedUrl,
                  identifier:decodeURI(e[data.mappedIdentifier]),
                  title:decodeURI(e.title),
                  type:data.source
                }) ));
                 
            }
           
        }
       
    }
  }
  

  return mappedDatas
 
}
