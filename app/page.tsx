import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-2xl flex-col items-center justify-between py-38 bg-white dark:bg-black sm:items-start text-center">
        <h1 className="text-xl font-extrabold text-zinc-900 dark:text-white sm:text-6xl">
          This is a demo app to practice cicd with jenkins .
          work in progress...
          developer:  Sudipto Mukherjee

          cicd has been completed for staging environment.
          fix the pm2 resetart issue .
        </h1>
        <h2>
          Next.js + TypeScript + Tailwind CSS + Jest + Cypress
          This is the updated code for cicd with rsync and pm2 process management and deployed first to staging server and then to production server.
        </h2>
       
      </main>
    </div>
  );
}
