import { useState } from "react";
import { Bars3Icon, PencilIcon } from "@heroicons/react/24/outline";
import { useSession, signOut } from "next-auth/react";
import { resetServerContext } from "react-beautiful-dnd";

import Sidebar from "../../components/dashboard-sidebar";

interface Props {
  name: string;
  email: string;
  kindleEmail: string;
}

export default function Example({ name, email, kindleEmail }: Props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <>
      <div>
        <Sidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          session={session}
          signOut={signOut}
        />
        <div className="flex flex-1 flex-col md:pl-64">
          <div className="sticky top-0 z-10 bg-gray-100 pl-1 pt-1 sm:pl-3 sm:pt-3 md:hidden">
            <button
              type="button"
              className="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <main className="flex-1">
            <div className="py-6">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                <div className="py-4">
                  {/*Title of Page*/}
                  <div className="flex justify-between mb-8 flex-col-reverse lg:flex-row">
                    <div className=" h-[39px] w-full">
                      <h1 className="lg:text-2xl text-xl pt-[7px] font-semibold text-gray-900 inline-block">
                        Account Settings
                      </h1>
                    </div>
                  </div>

                  {/*Body of Page*/}
                  <div className="flex flex-wrap gap-4">
                    <KindleEmail kindleEmail={kindleEmail} />
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

const KindleEmail = ({ kindleEmail }: { kindleEmail: string }) => {
  const [editEmail, setEditEmail] = useState(false);
  const [email, setEmail] = useState(kindleEmail);

  return (
    <div className=" h-[39px] w-full">
      <p className="font-light text-gray-700 max-w-xl">
        In order to recieve your daily news paper, you must enter your
        Kindle&apos;s email address and approve our delivery email address in
        your Kindle&apos;s settings.
      </p>
      <div className="mt-4 flex rounded-md border-gray-200 border w-96">
        <div className="relative flex flex-grow items-stretch focus-within:z-10">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full rounded-none rounded-l-md bg-gray-100 border-gray-300 pl-2 focus:outline-none "
            placeholder="Enter your kindle's email address"
          />
        </div>
        <button
          type="button"
          onClick={() => setEditEmail(false)}
          className="relative -ml-px inline-flex items-center space-x-2 rounded-r-md bg-indigo-200 px-4 py-2 text-sm font-medium text-indigo-400 hover:bg-indigo-600 hover:text-indigo-50"
        >
          <span>Save</span>
        </button>
      </div>

      {editEmail ? (
        <PencilIcon
          onClick={() => setEditEmail(true)}
          className={`h-4 w-4 ml-2 hidden lg:inline-block text-gray-300 hover:text-gray-600 cursor-pointer -translate-y-2 transform `}
          aria-hidden="true"
        />
      ) : null}
    </div>
  );
};

export async function getServerSideProps(context: any) {
  resetServerContext();

  //fetch the issue from the backend
  const req = await fetch(`${process.env.API_URL}/get/user-info`);
  const userinfo = await req.json();

  return {
    props: {
      ...userinfo,
    },
  };
}
