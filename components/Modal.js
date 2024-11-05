import Form from "./Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark} from "@fortawesome/free-solid-svg-icons";

import { useSelector, useDispatch } from "react-redux";
import { openModal } from '../reducers/modal';
import { deleteEntity } from '../reducers/entity';

export default function Modal({schema,editMode}) {
  console.log('editmode dans modal',editMode)
    const dispatch = useDispatch();
    // const modal = useSelector((state) => state.modal.value);

    const handleToClose = ()=>{
        dispatch(openModal(false));
        dispatch(deleteEntity(null));
    }
   
  return (
    <div
      className="absolute top-[5%] left-0 min-h-[%] w-full
     flex flex-row items-center justify-center"
     
    >
        <div className="bg-black relative w-1/2 min-h-[50%] p-2
    min-h-full flex items-center opacity-100 justify-center text-white">
        <Form schema={schema} editMode={editMode}/>

        <FontAwesomeIcon icon={faCircleXmark} size='xl' 
        className="cursor-pointer w-6 absolute right-5 top-3 m-2 my-5" onClick={()=>handleToClose()}/>
        </div>

    </div>
  );
}
