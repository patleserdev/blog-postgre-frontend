import { useDispatch } from "react-redux";
import { openModal } from "../reducers/modal";
import { addEntity } from "../reducers/entity";
import { activeEdit } from "../reducers/editmode";

export default function Editbutton({ entity, source }) {
  const dispatch = useDispatch();

  const handleToEdit = (entity) => {
    dispatch(openModal(true));
    dispatch(addEntity(entity));
    dispatch(activeEdit(true));
  };

  return (
    <>
      <button
        onClick={() => handleToEdit(entity)}
        className="p-2 px-4 text-sm md:text-md w-full text-center border hover:bg-slate-500 transition-all"
      >
        Modifier
      </button>
    </>
  );
}
