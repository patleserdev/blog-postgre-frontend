import Addbutton from "@/components/Addbutton.js";
import List from "../components/List";
import Navbar from "@/components/Navbar";
import Modal from "@/components/Modal";
import Head from "next/head.js";
import { useSelector } from "react-redux";

import Footer from "@/components/Footer.js";
export const metadata = {
  title: "Blog - Posts",
  description: "...",
};
const Posts = () => {
  const schema = "posts";
  const openModal = useSelector((state) => state.modal.value);
  return (
    <>
      <Head>
        <title>Blogger - Posts</title>
      </Head>
      {/* <div className="grid grid-rows-[20px_1fr_20px] items-start justify-items-start min-h-screen p-8 pb-20 gap-16 sm:p-10 font-[family-name:var(--font-geist-sans)]"> */}
      <div className="font-[family-name:var(--font-geist-sans)]">
        <Navbar />
        <main className="w-full flex flex-col items-center justify-center z-1">
          <h1 className="text-2xl underline">Posts :</h1>
          <div className="border w-1/4 mt-2">
            <Addbutton>Ajouter</Addbutton>
          </div>

          <List schema={schema} />

          {openModal && (
            <div className="z-5">
              <Modal schema={schema} />
            </div>
          )}
        </main>
        <Footer />
      </div>
    </>
  );
};
export default Posts;
