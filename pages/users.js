import Form from "../components/Form.js";
import List from "../components/List.js";
import Addbutton from "@/components/Addbutton.js";
import Navbar from "@/components/Navbar";
import Head from "next/head.js";
import Modal from "@/components/Modal";
import { useSelector, useDispatch } from "react-redux";
import { openModal } from '../reducers/modal';

export const metadata = {
  title: "Blog - Utilisateurs",
  description: "...",
};
const Users = () => {
  const schema = "users";
  const openModal = useSelector((state) => state.modal.value);
  return (
    <>
      <Head>
        <title>Blogger - Utilisateurs</title>
      </Head>
      {/* <div className="grid grid-rows-[20px_1fr_20px] items-start justify-items-start min-h-screen p-8 pb-20 gap-16 sm:p-10 font-[family-name:var(--font-geist-sans)]"> */}
      <div className="font-[family-name:var(--font-geist-sans)]">
        <Navbar />
        <main className="w-full flex flex-col items-center justify-center">
          <h1 className="text-2xl underline">Utilisateurs :</h1>
          <div className="border w-1/4 mt-2">
          <Addbutton/>
          </div>
        

          <List schema={schema} />

          {openModal &&
        <div className="z-5">
        <Modal schema={schema}/>
        </div>}

        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
      </div>
    </>
  );
};
export default Users;
