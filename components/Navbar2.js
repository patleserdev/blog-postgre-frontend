import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/legacy/image.js";

import getcategories from "../pages/api/getcategories";
import { useEffect, useRef, useState } from "react";
import Router, { useRouter } from "next/router.js";

import { useAuth } from "../hooks/AuthProvider";
import { Toaster, toast } from "sonner";
const navigation = [{ name: "Home", href: "/", current: true }];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar2() {
  const auth = useAuth();
  const [categories, setCategories] = useState([]);
  const [adminMode, setAdminMode] = useState(false);
  const [user, setUser] = useState(auth.user ? auth.user : {});
  const router = useRouter();
  const closeRef = useRef(null);

  // console.log(router);
  useEffect(() => {
    (async () => {
      const categoriesDatas = await getcategories();
      if (categoriesDatas) {
        setCategories(categoriesDatas);
        // console.log(categoriesDatas);
      }
    })();
  }, []);

  useEffect(() => {
    if (localStorage.getItem("blogin-frontend-token")) {
      setAdminMode(true);
      toast.success("Vous êtes connecté")
    }
  }, []);

  const handleConnect = (e) => {
    e.preventDefault();
   ( async()=>{

      const connect=await auth.loginAction(user)
     
      if (connect) 
      {
        setAdminMode(true);
        toast.success("Vous êtes connecté")
      }
      else
      {
        toast.warning("Accès interdit")
  
      }
  
      // pour fermer le menu headless ui ;)
      closeRef.current?.click();
    })()
   
  };

  const handleToLogOut = () => {
    auth.logOut();
    setAdminMode(false);
    toast.warning("Vous êtes déconnecté.")
  };

  if (categories) {
    categories.map((e) =>
      e.isactive &
      !navigation.find(
        (one) =>
          one.name ==
          decodeURI(e.url).charAt(0).toUpperCase() +
            decodeURI(e.url).slice(1, e.url.length).toLowerCase()
      )
        ? navigation.push({
            name:
              decodeURI(e.url).charAt(0).toUpperCase() +
              decodeURI(e.url).slice(1, e.url.length).toLowerCase(),
            href: `/categorie/${e.url}`,
            current: false,
          })
        : null
    );
  }

  return (
    <Disclosure as="nav" className="bg-gray-800 mt-2">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-col shrink-0 items-center justify-center">
              <Image
                alt="logo"
                src="/assets/logo-light.png"
                width={80}
                height={80}
                priority
              />
            </div>
            <div className=" hidden sm:ml-6 sm:flex ">
              <div className="flex items-center justify-center space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={
                      router.asPath.toLowerCase() == item.href
                        ? "page"
                        : undefined
                    }
                    className={classNames(
                      router.asPath.toLowerCase() == item.href.toLowerCase()
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      " rounded-md px-3 py-2 text-sm font-medium capitalize "
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 p-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 transition-all"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="h-6 w-6" />
            </button> */}

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                {adminMode && (
                  <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 p-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800  transition-all">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                      />
                    </svg>
                  </MenuButton>
                )}
              </div>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <a
                    href="/postcategories"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                  >
                    Gestion des catégories
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="/posts"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                  >
                    Gestion des posts
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="/comments"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                  >
                    Gestion des commentaires
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="/users"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                  >
                    Gestion des utilisateurs
                  </a>
                </MenuItem>

                <MenuItem>
                  <a
                    onClick={() => {
                      handleToLogOut();
                    }}
                    className="flex items-center justify-start  px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none cursor-pointer"
                  >
                    Se déconnecter
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="mx-2 size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
                      />
                    </svg>
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>

            <Menu as="div" className="relative ml-3">
              <div>
                {!adminMode && (
                  <MenuButton
                    ref={closeRef}
                    className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 p-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800  transition-all"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                      />
                    </svg>
                  </MenuButton>
                )}
              </div>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in text-slate-800 p-2"
              >
                <h3 className="my-2 text-lg">Administration</h3>
                <form
                  onSubmit={(e) => {
                    handleConnect(e);
                  }}
                >
                  <label className="px-1">Nom d'utilisateur</label>
                  <input
                    className="border my-1 w-ful px-2"
                    type="text"
                    onChange={(e) =>
                      setUser((user) => ({ ...user, username: e.target.value }))
                    }
                    value={user.username || ""}
                  />

                  <label className="px-1">Mot de passe</label>
                  <input
                    className="border mt-1 mb-2 w-full px-2"
                    type="password"
                    onChange={(e) =>
                      setUser((user) => ({ ...user, password: e.target.value }))
                    }
                    value={user.password || ""}
                  />

                  <button className="p-1 text-center w-full border hover:bg-slate-200 transition-all">
                    Se connecter
                  </button>
                </form>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
