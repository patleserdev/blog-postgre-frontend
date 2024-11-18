import Navbar from "./Navbar.js";
import Navbar2 from "./Navbar2.js";
import Footer from "./Footer.js";
import { Toaster, toast } from "sonner";


import CookiesComponent from "./CookiesComponent";
export default function Layout({ children }) {
  return (
    <>
      {/* <Navbar/> */}

      <Navbar2 />
      <div className="font-[family-name:var(--font-geist-sans)] w-full min-h-[75vh] relative">
        <main className="w-full min-h-[75vh] flex flex-col gap-8 row-start-2 items-center sm:items-start relative bg-gradient-to-b from-slate-800 from-1% to-slate-500">
          {children}
        </main>
        <Toaster />
      </div>
      <Footer />

     <CookiesComponent/>
    </>
  );
}
