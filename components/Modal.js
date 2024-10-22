import Form from "./Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark} from "@fortawesome/free-solid-svg-icons";

import { useSelector, useDispatch } from "react-redux";
import { openModal } from '../reducers/modal';


export default function Modal({schema}) {

    const dispatch = useDispatch();
    // const modal = useSelector((state) => state.modal.value);

    const handleToClose = ()=>{
        dispatch(openModal(false));
    }
  return (
    <div
      className="absolute top-0 left-0 w-full
    min-h-full flex flex-row items-center justify-center bg-black opacity-95"
    >
        <div className="bg-black relative w-1/2 p-5
    min-h-full flex items-center opacity-100 ustify-center text-white">
        <Form schema={schema}/>

        <FontAwesomeIcon icon={faCircleXmark} size='xl' className="cursor-pointer absolute right-0 top-0" onClick={()=>handleToClose()}/>
        </div>

    </div>
  );
}
