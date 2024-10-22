import { useDispatch } from "react-redux";
import { openModal } from "../reducers/modal";

export default function Editbutton({ id, source }) {
  const dispatch = useDispatch();

  const handleToEdit = () => {
    dispatch(openModal(true));
  };

  return (
    <>
      <button
        onClick={() => handleToEdit()}
        className="p-2 w-[45%] border hover:bg-slate-500 transition-all"
      >
        Modifier
      </button>
    </>
  );
}
