import Addbutton from "@/components/Addbutton.js";
import List from "../components/List";
import Navbar from "@/components/Navbar";
import Modal from "@/components/Modal";
import Head from "next/head.js";
import { useSelector } from "react-redux";
import Footer from "@/components/Footer.js";
import Layout from "@/components/Layout.js";
import { useAuth } from "../hooks/AuthProvider";
import Router, { useRouter } from "next/router.js";
import { useState,useEffect } from "react";

export const metadata = {
  title: "Blog - Posts",
  description: "...",
};
const Posts = () => {
  const [isAuth, setIsAuth] = useState(false);
  const router = useRouter();
  const auth = useAuth();
  useEffect(()=>{
    if(!localStorage.getItem("blogin-frontend-user") && !localStorage.getItem("blogin-frontend-token"))
      {
        router.push('/')
        return
      }
      else
      {
        setIsAuth(true)
      }
  },[])

  const schema = "posts";
  const openModal = useSelector((state) => state.modal.value);
  return (
    <>
      <Head>
        <title>Blogin - Posts</title>
      </Head>

      <Layout>
        <div className="flex flex-col w-full items-center justify-center mb-5">
          <h1 className="text-2xl underline">Posts :</h1>
          <div className="border w-1/4 mt-2">
            <Addbutton>Ajouter</Addbutton>
          </div>

          {isAuth && <List schema={schema} />}

          {isAuth && openModal && (
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
