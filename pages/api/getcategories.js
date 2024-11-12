
export default async function getcategories(req, res)
 {
      const datas=[]
        const response= await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/postcategories`)
        if(response)
        {
            const result = await response.json()
            if(result)
            {
                 
                 result.data.map((e => datas.push({
                  url:e.title,isactive:e.isactive
                }) ));
                 
            }
           
        }
       
  

  return datas
 
}
