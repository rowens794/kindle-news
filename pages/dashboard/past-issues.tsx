import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Bars3Icon, ArrowPathIcon } from "@heroicons/react/24/outline";
import { useSession, signOut } from "next-auth/react";
import { resetServerContext } from "react-beautiful-dnd";
import Link from "next/link";

import Sidebar from "../../components/dashboard-sidebar";

interface Props {
  pastIssues: {
    issues: {
      articles: {
        id: string;
        title: string;
        description: string;
        date: Date;
        author: string;
        source: string;
      }[];
      name: string;
      lastDelivered: Date;
    }[];
  };
}

export default function Example({ pastIssues }: Props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sendMsgOpen, setSendMsgOpen] = useState(false);
  const { data: session } = useSession();

  const deliverNewspaper = () => {
    setSendMsgOpen(true);
    setTimeout(() => {
      setSendMsgOpen(false);
    }, 3000);
  };

  return (
    <>
      <div>
        <PushingToKindle open={sendMsgOpen} />
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
                        Past Editions
                      </h1>
                    </div>
                  </div>

                  {/*Body of Page*/}
                  <div className="flex flex-wrap gap-4">
                    {pastIssues && pastIssues.issues.length > 0
                      ? pastIssues.issues.slice(0, 5).map((issue) => {
                          return (
                            <PastEditionCard
                              key={issue.name}
                              articles={issue.articles}
                              name={issue.name}
                              lastDelivered={issue.lastDelivered}
                            />
                          );
                        })
                      : null}
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

const PushingToKindle = ({ open }: { open: boolean }) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => null}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full justify-center p-4 text-center items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative max-h-64 transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <div>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <ArrowPathIcon
                      className="h-6 w-6 text-green-600 animate-spin"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Sending Collection to Kindle
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500 max-w-xs">
                        Our digital minions are hard at work sending your custom
                        collection to your Kindle. This may take a few moments.
                      </p>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

interface PastEditionCardProps {
  articles: {
    id: string;
    title: string;
    description: string;
    date: Date;
    author: string;
    source: string;
  }[];
  name: string;
  lastDelivered: Date;
}

const PastEditionCard = ({
  articles,
  name,
  lastDelivered,
}: PastEditionCardProps) => {
  return (
    <div className="aspect-[1/1.41421] select-none overflow-hidden bg-gray-200 w-64  border-gray-300 border shadow-lg rounded-sm flex flex-col justify-between">
      <div className="p-2">
        <div>
          <span className="text-xs text-gray-600">
            Past Edition (delivered{" "}
            {new Date(lastDelivered).toLocaleDateString()})
          </span>
          <h2 className="text-base font-bold text-gray-500 line-clamp-2 ">
            {name}
          </h2>
        </div>

        <div className="ml-2 mt-2">
          <span className="text-xs text-gray-500 font-semibold ">
            Stories include:
          </span>
          <ul className="mt-2 list-disc text-xs ml-4 pr-2 marker:text-gray-400 text-gray-500 ">
            {articles.slice(0, 5).map((article) => {
              return (
                <li className="" key={article.id}>
                  <span className="line-clamp-2">{article.title}</span>
                </li>
              );
            })}
            {articles.length > 5 && (
              <p className="font-bold text-right w-full pr-4 text-gray-500 ">
                + {articles.length - 5} more
              </p>
            )}
          </ul>
        </div>
      </div>

      <button className="w-full bg-gray-500 hover:bg-indigo-600 py-4 rounded-b-sm">
        <p className="text-lg font-bold text-white">Resend to Kindle</p>
      </button>
    </div>
  );
};

export async function getServerSideProps(context: any) {
  resetServerContext();

  //fetch the issue from the backend
  const req = await fetch(`${process.env.API_URL}/get/current-issue`);
  const issue = await req.json();

  //fetch past issues from the backend
  const req2 = await fetch(`${process.env.API_URL}/get/past-issues`);
  const pastIssues = await req2.json();

  return {
    props: {
      pastIssues,
    },
  };
}
