import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function Example() {
  const { data: session } = useSession();
  let email = session?.user?.email;

  return (
    <>
      <div className="isolate bg-white">
        <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
          <svg
            className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
            viewBox="0 0 1155 678"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
              fillOpacity=".3"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />
            <defs>
              <linearGradient
                id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                x1="1155.49"
                x2="-78.208"
                y1=".177"
                y2="474.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9089FC" />
                <stop offset={1} stopColor="#FF80B5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="flex min-h-screen flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              {session ? "Logged in as " + email : "Sign in to Push My Paper"}
            </h2>
          </div>

          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              {session ? <LoggedInButton /> : <SignInButton />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const SignInButton = () => {
  return (
    <button
      onClick={() => signIn("google")}
      className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50 cursor-pointer"
    >
      <svg
        className="h-5 w-5 cursor-pointer"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <clipPath id="p.0">
          {" "}
          <path
            d="m0 0l20.0 0l0 20.0l-20.0 0l0 -20.0z"
            clipRule="nonzero"
          />{" "}
        </clipPath>{" "}
        <g clipPath="url(#p.0)">
          {" "}
          <path
            fill="currentColor"
            fillOpacity="0.0"
            d="m0 0l20.0 0l0 20.0l-20.0 0z"
            fillRule="evenodd"
          />{" "}
          <path
            fill="currentColor"
            d="m19.850197 8.270351c0.8574047 4.880001 -1.987587 9.65214 -6.6881847 11.218641c-4.700598 1.5665016 -9.83958 -0.5449295 -12.08104 -4.963685c-2.2414603 -4.4187555 -0.909603 -9.81259 3.1310139 -12.6801605c4.040616 -2.867571 9.571754 -2.3443127 13.002944 1.2301085l-2.8127813 2.7000687l0 0c-2.0935059 -2.1808972 -5.468274 -2.500158 -7.933616 -0.75053835c-2.4653416 1.74962 -3.277961 5.040613 -1.9103565 7.7366734c1.3676047 2.6960592 4.5031037 3.9843292 7.3711267 3.0285425c2.868022 -0.95578575 4.6038647 -3.8674583 4.0807285 -6.844941z"
            fillRule="evenodd"
          />{" "}
          <path
            fill="currentColor"
            d="m10.000263 8.268785l9.847767 0l0 3.496233l-9.847767 0z"
            fillRule="evenodd"
          />
        </g>
      </svg>
      <p className="ml-4 cursor-pointer">Sign in with Google</p>
    </button>
  );
};

const LoggedInButton = (data: any) => {
  return (
    <Link
      href="/dashboard"
      className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50 cursor-pointer"
    >
      <svg
        className="h-5 w-5 cursor-pointer"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <clipPath id="p.0">
          <path d="m0 0l20.0 0l0 20.0l-20.0 0l0 -20.0z" clipRule="nonzero" />{" "}
        </clipPath>{" "}
        <g clipPath="url(#p.0)">
          {" "}
          <path
            fill="currentColor"
            fillOpacity="0.0"
            d="m0 0l20.0 0l0 20.0l-20.0 0z"
            fillRule="evenodd"
          />{" "}
          <path
            fill="currentColor"
            d="m19.850197 8.270351c0.8574047 4.880001 -1.987587 9.65214 -6.6881847 11.218641c-4.700598 1.5665016 -9.83958 -0.5449295 -12.08104 -4.963685c-2.2414603 -4.4187555 -0.909603 -9.81259 3.1310139 -12.6801605c4.040616 -2.867571 9.571754 -2.3443127 13.002944 1.2301085l-2.8127813 2.7000687l0 0c-2.0935059 -2.1808972 -5.468274 -2.500158 -7.933616 -0.75053835c-2.4653416 1.74962 -3.277961 5.040613 -1.9103565 7.7366734c1.3676047 2.6960592 4.5031037 3.9843292 7.3711267 3.0285425c2.868022 -0.95578575 4.6038647 -3.8674583 4.0807285 -6.844941z"
            fillRule="evenodd"
          />{" "}
          <path
            fill="currentColor"
            d="m10.000263 8.268785l9.847767 0l0 3.496233l-9.847767 0z"
            fillRule="evenodd"
          />
        </g>
      </svg>
      <p className="ml-4 cursor-pointer">Go To Dashboard</p>
    </Link>
  );
};
