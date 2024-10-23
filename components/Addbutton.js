import { useDispatch } from "react-redux";
import { openModal } from "../reducers/modal";

export default function Addbutton({ id, source }) {
  const BACKEND_URL = "http://localhost:3000";

  const dispatch = useDispatch();

  const handleToAdd = () => {
    dispatch(openModal(true));
  };

  return (
    <>
      <button
        onClick={() => handleToAdd()}
        className="w-full text-lg p-2 px-1 border hover:bg-slate-500 transition-all"
      >
        Ajouter
      </button>
    </>
  );
}
