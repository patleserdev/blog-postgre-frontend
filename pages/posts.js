import Addbutton from "@/components/Addbutton.js";
import List from "../components/List";
import Navbar from "@/components/Navbar";
import Modal from "@/components/Modal";
import Head from "next/head.js";
import { useSelector } from "react-redux";

import Footer from "@/components/Footer.js";
import Layout from "@/components/Layout.js";
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

      <Layout>
        <div className="flex flex-col w-full items-center justify-center mb-5">
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
        </div>
      </Layout>
    </>
  );
};
export default Posts;
