import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  FolderIcon,
  HomeIcon,
  NewspaperIcon,
  UsersIcon,
  XMarkIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import Link from "next/link";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: HomeIcon },
  {
    name: "Current Issue",
    href: "/dashboard/current-issue",
    icon: NewspaperIcon,
  },
  {
    name: "Past Issues",
    href: "/dashboard/past-issues",
    icon: FolderIcon,
  },
  {
    name: "Account",
    href: "/dashboard/account",
    icon: UsersIcon,
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
type Props = {
  sidebarOpen: boolean;
  setSidebarOpen: Function;
  session: any;
  signOut: Function;
};

export default function Index({
  sidebarOpen,
  setSidebarOpen,
  session,
  signOut,
}: Props) {
  const router = useRouter();

  const handleSignout = async () => {
    await signOut();
    location.href = "/";
  };

  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40 md:hidden"
          onClose={() => setSidebarOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-indigo-700">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className="h-0 flex-1 overflow-y-auto pt-5 pb-4">
                  <div className="flex flex-shrink-0 items-center px-4">
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=300"
                      alt="Your Company"
                    />
                  </div>
                  <nav className="mt-5 space-y-1 px-2">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.href === router.pathname
                            ? "bg-indigo-800 text-white"
                            : "text-white hover:bg-indigo-600 hover:bg-opacity-75",
                          "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                        )}
                      >
                        <item.icon
                          className="mr-4 h-6 w-6 flex-shrink-0 text-indigo-300"
                          aria-hidden="true"
                        />
                        {item.name}
                      </Link>
                    ))}

                    <button
                      onClick={() => handleSignout()}
                      className="text-white hover:bg-red-500 hover:bg-opacity-75 group flex items-center px-2 py-2 text-base font-medium rounded-md w-full"
                    >
                      <ArrowLeftOnRectangleIcon
                        className="mr-4 h-6 w-6 flex-shrink-0 text-indigo-300 group-hover:text-red-200"
                        aria-hidden="true"
                      />
                      Sign Out
                    </button>
                  </nav>
                </div>
                <ProfileBlock session={session} />
              </Dialog.Panel>
            </Transition.Child>
            <div className="w-14 flex-shrink-0" aria-hidden="true">
              {/* Force sidebar to shrink to fit close icon */}
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex min-h-0 flex-1 flex-col bg-indigo-700">
          <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
            <div className="flex flex-shrink-0 items-center px-4">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=300"
                alt="Your Company"
              />
            </div>
            <nav className="mt-5 flex-1 space-y-1 px-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.href === router.pathname
                      ? "bg-indigo-800 text-white"
                      : "text-white hover:bg-indigo-600 hover:bg-opacity-75",
                    "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                  )}
                >
                  <item.icon
                    className="mr-3 h-6 w-6 flex-shrink-0 text-indigo-300"
                    aria-hidden="true"
                  />
                  {item.name}
                </Link>
              ))}
              <button
                onClick={() => handleSignout()}
                className="text-white w-full hover:bg-red-400 hover:bg-opacity-75 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
              >
                <ArrowLeftOnRectangleIcon
                  className="mr-3 h-6 w-6 flex-shrink-0 text-indigo-300 group-hover:text-red-200"
                  aria-hidden="true"
                />
                Sign Out
              </button>
            </nav>
          </div>
          <ProfileBlock session={session} />
        </div>
      </div>
    </>
  );
}

const ProfileBlock = ({ session }: { session: any }) => {
  const name = session?.user?.name || "User";
  const img = session?.user?.image || "https://i.imgur.com/4KeKvtH.png";

  return (
    <div className="flex flex-shrink-0 border-t border-indigo-800 p-4">
      <Link href="/dashboard" className="group block w-full flex-shrink-0">
        <div className="flex items-center">
          <div>
            <img
              className="inline-block h-9 w-9 rounded-full"
              src={img}
              alt="User Profile Image"
            />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-white">{name}</p>
            <p className="text-xs font-medium text-indigo-200 group-hover:text-white">
              View profile
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};
