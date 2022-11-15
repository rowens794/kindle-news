import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  TrashIcon,
  PencilIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";
import { useSession, signOut } from "next-auth/react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  resetServerContext,
} from "react-beautiful-dnd";

import Sidebar from "../../components/dashboard-sidebar";

interface Props {
  articles: {
    id: string;
    title: string;
    description: string;
    date: string;
    author: string;
    source: string;
  }[];
  name: string;
}

export default function Example({ articles, name }: Props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [articleList, setArticlesList] = useState(articles);
  const [issueTitle, setIssueTitle] = useState(name);
  const [sendMsgOpen, setSendMsgOpen] = useState(false);
  const { data: session } = useSession();

  const onDragEnd = (result: any) => {
    //update the items location in the array
    const items = Array.from(articleList);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setArticlesList(items);
  };

  const getItemStyle = (isDragging: any, draggableStyle: any) => ({
    ...draggableStyle,
  });

  const getListStyle = (isDraggingOver: any) => ({
    width: "100%",
  });

  const deleteArticle = (id: string) => {
    const newArticleList = articleList.filter((article) => article.id !== id);
    setArticlesList(newArticleList);
  };

  const deliverNewspaper = () => {
    setSendMsgOpen(true);
    setTimeout(() => {
      setSendMsgOpen(false);
      setIssueTitle("The Next Issue");
      setArticlesList([]);
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
                  <div className="flex justify-between mb-8 flex-col-reverse lg:flex-row">
                    <PageTitle
                      issueTitle={issueTitle}
                      setIssueTitle={setIssueTitle}
                    />

                    <div className="text-center mb-4">
                      {articleList.length > 0 ? (
                        <button
                          onClick={deliverNewspaper}
                          className="bg-indigo-200  transition-colors duration-200 rounded-md py-1 px-3 text-indigo-500 hover:text-indigo-50 hover:bg-indigo-600 lg:w-44 h-10 text-base font-semibold lg:font-light lg:text-sm w-full"
                        >
                          Push to Kindle
                        </button>
                      ) : (
                        <button className="bg-gray-200 cursor-default transition-colors duration-200 rounded-md py-1 px-3 text-gray-500 lg:w-44 h-10 text-base font-semibold lg:font-light lg:text-sm w-full">
                          Push to Kindle
                        </button>
                      )}
                    </div>
                  </div>
                  {articleList.length > 0 ? (
                    <DragDropContext onDragEnd={onDragEnd}>
                      <Droppable droppableId="droppable">
                        {(provided, snapshot) => (
                          <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            style={getListStyle(snapshot.isDraggingOver)}
                          >
                            {articleList.map((item, index) => (
                              <Draggable
                                key={item.id}
                                draggableId={item.id}
                                index={index}
                              >
                                {(provided, snapshot) => (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={getItemStyle(
                                      snapshot.isDragging,
                                      provided.draggableProps.style
                                    )}
                                  >
                                    <Card
                                      article={item}
                                      deleteArticle={deleteArticle}
                                    />
                                  </div>
                                )}
                              </Draggable>
                            ))}
                            {provided.placeholder}
                          </div>
                        )}
                      </Droppable>
                    </DragDropContext>
                  ) : (
                    <NoContentMessage />
                  )}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

const PageTitle = ({
  issueTitle,
  setIssueTitle,
}: {
  issueTitle: string;
  setIssueTitle: Function;
}) => {
  const [editIssueName, setEditIssueName] = useState(false);

  return (
    <div className=" h-[39px] w-full">
      {!editIssueName ? (
        <h1 className="lg:text-2xl text-xl pt-[7px] font-semibold text-gray-900 inline-block">
          {issueTitle}
        </h1>
      ) : (
        <div className="mt-1 flex rounded-md border-gray-200 border w-3/4">
          <div className="relative flex flex-grow items-stretch focus-within:z-10">
            <input
              value={issueTitle}
              onChange={(e) => setIssueTitle(e.target.value)}
              className="block w-full rounded-none rounded-l-md bg-gray-100 border-gray-300 pl-2 lg:text-2xl font-semibold focus:outline-none "
              placeholder="Enter issue name"
            />
          </div>
          <button
            type="button"
            onClick={() => setEditIssueName(false)}
            className="relative -ml-px inline-flex items-center space-x-2 rounded-r-md bg-indigo-200 px-4 py-2 text-sm font-medium text-indigo-400 hover:bg-indigo-600 hover:text-indigo-50"
          >
            <span>Save</span>
          </button>
        </div>
      )}
      {!editIssueName ? (
        <PencilIcon
          onClick={() => setEditIssueName(true)}
          className={`h-4 w-4 ml-2 hidden lg:inline-block text-gray-300 hover:text-gray-600 cursor-pointer -translate-y-2 transform `}
          aria-hidden="true"
        />
      ) : null}
    </div>
  );
};

const Card = ({
  article,
  deleteArticle,
}: {
  article: any;
  deleteArticle: Function;
}) => {
  return (
    <div
      key={article.id}
      className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white pr-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400 flex-row my-2 group overflow-hidden"
    >
      <button
        onClick={() => deleteArticle(article.id)}
        className="absolute transition-all duration-500 -right-36 group-hover:right-0 bg-red-200 hover:bg-red-500 h-full rounded-l-full w-12 flex flex-col justify-center cursor-pointer opacity-90 hover:opacity-100"
      >
        <TrashIcon className="h-6 w-6 text-white mx-auto" />
      </button>

      <DraggableIcon />

      <div className="min-w-0 flex-1">
        <div className="focus:outline-none">
          <p className="text-sm font-medium text-gray-900">
            {article.title}
            <span className="text-xs text-gray-600 font-light ml-2">
              by: {article.author}
            </span>
          </p>

          <p className="truncate text-sm text-gray-500 font-light">
            {article.description}
          </p>
        </div>
      </div>

      <div>
        <p className="text-xs text-gray-500 font-light text-right">
          {article.source}
        </p>
        <p className="text-xs text-gray-500 font-light text-right">
          {article.date}
        </p>
      </div>
    </div>
  );
};

const DraggableIcon = () => {
  return (
    <svg
      x="0px"
      y="0px"
      width="18px"
      height="32px"
      viewBox="0 0 18 32"
      className="fill-gray-300 hover:fill-gray-400"
    >
      <rect x="3" y="6" width="4" height="4" rx="1" />
      <rect x="11" y="6" width="4" height="4" rx="1" />
      <rect x="3" y="14" width="4" height="4" rx="1" />
      <rect x="11" y="14" width="4" height="4" rx="1" />
      <rect x="3" y="22" width="4" height="4" rx="1" />
      <rect x="11" y="22" width="4" height="4" rx="1" />
    </svg>
  );
};

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

const NoContentMessage = () => {
  return (
    <div className="lg:w-3/4 mx-auto p-8 bg-gray-100 rounded-md lg:mt-24">
      <p className="text-gray-700 text-center font-light">
        There are no articles in the current collection. Better go find some.
      </p>
    </div>
  );
};

export async function getServerSideProps(context: any) {
  resetServerContext();

  //fetch the issue from the backend
  const req = await fetch(`${process.env.API_URL}/get/current-issue`);
  const issue = await req.json();

  return {
    props: {
      ...issue,
    },
  };
}
