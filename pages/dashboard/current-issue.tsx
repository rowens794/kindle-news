import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useSession, signOut } from "next-auth/react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

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
}

export default function Example({ articles }: Props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [articleList, setArticlesList] = useState(articles);
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
                  <h1 className="text-2xl font-semibold text-gray-900">
                    Your Current Issue
                  </h1>

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
                                  <Card article={item} />
                                </div>
                              )}
                            </Draggable>
                          ))}
                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>
                  </DragDropContext>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

const Card = ({ article }: { article: any }) => {
  return (
    <div
      key={article.id}
      className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400 flex-row my-2"
    >
      <div className="min-w-0 flex-1">
        <a href="#" className="focus:outline-none">
          <p className="text-sm font-medium text-gray-900">
            {article.title}
            <span className="text-xs text-gray-600 font-light ml-2">
              by: {article.author}
            </span>
          </p>

          <p className="truncate text-sm text-gray-500 font-light">
            {article.description}
          </p>
        </a>
      </div>

      <div>
        <p className="text-sm text-gray-500 font-light text-right">
          {article.source}
        </p>
        <p className="text-sm text-gray-500 font-light text-right">
          {article.date}
        </p>
      </div>
    </div>
  );
};

export async function getServerSideProps(context: any) {
  const articles = [
    {
      id: "1",
      title: "Article 1",
      description: "This is the description for article 1",
      date: "1/21/2022",
      author: "John Doe",
      source: "www.wsj.com",
    },
    {
      id: "2",
      title: "Article 2",
      description:
        "This is the description for article 2 This is the description for article 2 This is the description for article 2 This is the description for article 2",
      date: "4/23/2022",
      author: "Lisa Joy",
      source: "www.bloomberg.com",
    },
    {
      id: "3",
      title: "Article 3",
      description: "This is the description for article 3",
      date: "6/30/2022",
      author: "Jerry Sing",
      source: "www.reuters.com",
    },
    {
      id: "4",
      title: "Article 4",
      description: "This is the description for article 4",
      date: "7/21/2022",
      author: "Jane Doe",
      source: "www.nytimes.com",
    },
    {
      id: "5",
      title: "Article 5",
      description: "This is the description for article 5",
      date: "8/21/2022",
      author: "John Doe",
      source: "www.wsj.com",
    },
    {
      id: "6",
      title: "Article 6",
      description: "This is the description for article 6",
      date: "9/21/2022",
      author: "Lisa Joy",
      source: "www.bloomberg.com",
    },
    {
      id: "7",
      title: "Article 7",
      description: "This is the description for article 7",
      date: "10/21/2022",
      author: "Jerry Sing",
      source: "www.reuters.com",
    },
  ];
  return {
    props: {
      articles,
    },
  };
}
