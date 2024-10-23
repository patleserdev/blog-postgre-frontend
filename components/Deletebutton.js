import { useDispatch } from 'react-redux';
import { reloading } from '../reducers/reloader';
import { useSelector } from 'react-redux';

export default function Deletebutton({id,source}) {

const BACKEND_URL='http://localhost:3000'

const dispatch = useDispatch();
const reload = useSelector((state) => state.reloader.value);


const handleToDelete=()=>{

    confirm("Etes-vous sûr de vouloir supprimer cet élément ?");

    if (confirm)
    {
        (async ()=>{
            const response = await fetch(`${BACKEND_URL}/${source}/${id}`, {
                method: "delete",
                headers: {
                  // Content-Type: "multipart/form-data",
                  "Content-Type": " application/json",
                  //   Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              });


              const result = await response.json()

              if(result)
              {
                console.log(result)
                dispatch(reloading(!reload));
              }
    
        })()
    }

 
}

  return (
    <>
      <button 
      onClick={()=>handleToDelete()}
      className="p-2 text-md w-[50%] border hover:bg-slate-500 transition-all">
        Supprimer
      </button>
    </>
  );
}
