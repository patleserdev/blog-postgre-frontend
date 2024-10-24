import Form from "./Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark} from "@fortawesome/free-solid-svg-icons";

import { useSelector, useDispatch } from "react-redux";
import { openModal } from '../reducers/modal';
import { deleteEntity } from '../reducers/entity';

export default function Modal({schema}) {

    const dispatch = useDispatch();
    // const modal = useSelector((state) => state.modal.value);

    const handleToClose = ()=>{
        dispatch(openModal(false));
        dispatch(deleteEntity(null));
    }
  return (
    <div
      className="fixed top-0 left-0 w-full
    min-h-full flex flex-row items-center justify-center bg-black opacity-95"
    >
        <div className="bg-black relative w-1/2
    min-h-full flex items-center opacity-100 justify-center text-white">
        <Form schema={schema}/>

        <FontAwesomeIcon icon={faCircleXmark} size='xl' className="cursor-pointer w-6 absolute right-0 top-0" onClick={()=>handleToClose()}/>
        </div>

    </div>
  );
}
