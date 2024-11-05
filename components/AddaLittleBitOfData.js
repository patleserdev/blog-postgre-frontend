export default function AddaLittleBitOfData({ children }) {

    // 
  return (
    <div className="flex flex-col justify-center items-start w-1/2">
        <div className="w-full">
        <label for className="flex ">
        Titre :
      </label>
        <input name="title" type="text" className="w-full px-2 h-8 text-black" />
        </div>

        <div className="w-full my-2">
        <label for className="flex">
        Commentaire :
      </label>
        <textarea className="w-full px-2 h-8 text-black" ></textarea>
        </div>
     
      
        <button className="border self-center h-8 px-2 hover:bg-white hover:text-slate-500 w-1/4">
          Ajouter
        </button>
   
      <div className="h-8 w-full">
        {/* errors */}
      </div>
    </div>
  );
}
