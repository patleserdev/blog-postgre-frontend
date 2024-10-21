import Form from "../components/Form.js";
import List from "../components/List.js";
import Navbar from "@/components/Navbar";
export const metadata = {
  title: 'Blog - Utilisateurs',
  description: '...',
}
const Users = () => {
  const schema = "users";

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-start justify-items-start min-h-screen p-8 pb-20 gap-16 sm:p-10 font-[family-name:var(--font-geist-sans)]">
      <Navbar/>
      <main className="w-full flex flex-col items-center justify-center">
        <h1 className="text-2xl underline">Utilisateurs :</h1>

        <Form schema={schema} />

        <List schema={schema} />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
export default Users;