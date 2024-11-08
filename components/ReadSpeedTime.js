import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faClock} from "@fortawesome/free-solid-svg-icons";

export default function({content}){

    return (
        <>
               <FontAwesomeIcon className="w-4" icon={faClock} />
               <i> environ {(((content.split(" ")).length/2.25)/60).toFixed(0)}mn</i>
        </>
    )
}