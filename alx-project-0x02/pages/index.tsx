import Header from "@/components/layout/Header";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Header />
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{" "}
          <a className="text-blue-600" href="https://alx-intranet.hbtn.io/">
            ALX Project 2!
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          Get started by editing{" "}
          <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
            pages/index.tsx
          </code>
        </p>
        
        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <a
            href="https://alx-intranet.hbtn.io/"
            className="p-6 mt-6 text-left border w-96 rounded-xl
            hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">ALX Intranet &rarr;</h3>
            <p className="mt-4 text-xl">
              Access the ALX intranet for resources and information.
            </p>
          </a>
          </div>
        </main>
    </div>
  );



};

