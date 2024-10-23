import { useDispatch } from "react-redux";
import { openModal } from "../reducers/modal";
import { addEntity } from "../reducers/entity";

export default function Editbutton({ entity, source }) {
  const dispatch = useDispatch();

  const handleToEdit = (entity) => {
    dispatch(openModal(true));
    dispatch(addEntity(entity));
  };

  return (
    <>
      <button
        onClick={() => handleToEdit(entity)}
        className="p-2 text-md w-[45%] border hover:bg-slate-500 transition-all"
      >
        Modifier
      </button>
    </>
  );
}
