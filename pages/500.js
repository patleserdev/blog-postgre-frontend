import Layout from "@/components/Layout.js"
import Link from "next/link.js";
export const metadata = {
    title: "Blog - Erreur 500",
    description: "...",
  };


export default function Custom500(){


    return (
        <Layout>
            <div className="h-[85vh] w-full flex items-center justify-center">
            <h1 className="text-2xl">Erreur Serveur</h1>
            <Link legacyBehavior passHref href="/"><a className="border p-2 hover:bg-background transition-all">Revenir à l'accueil</a></Link>
            </div>

        </Layout>
    )

}