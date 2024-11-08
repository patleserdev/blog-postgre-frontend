import Form from "../components/Form.js";
import List from "../components/List.js";
import Addbutton from "@/components/Addbutton.js";
import Navbar from "@/components/Navbar";
import Head from "next/head.js";
import Modal from "@/components/Modal";
import { useSelector} from "react-redux";

import Footer from "@/components/Footer.js";
import Layout from "@/components/Layout.js";
export const metadata = {
  title: "Blog - Catégories des posts",
  description: "...",
};
const Postcategories = () => {
  const schema = "postcategories";
  const openModal = useSelector((state) => state.modal.value);
  return (
    <>
      <Head>
        <title>Blogin - Catégories de Posts</title>
      </Head>

       <Layout>
        <div className="flex flex-col w-full items-center justify-center mb-5">

        
       <h1 className="text-2xl underline">Catégories de posts :</h1>
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
export default Postcategories;
