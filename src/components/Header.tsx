export default function Header() {
  return (
    <>
      <section className="flex justify-between py-5 px-8 items-center border-b-2 dark:text-white dark:bg-slate-800 dark:border-b-slate-800">
        <h1 className="font-extrabold md:text-3xl lg:text-4xl">
          Where in the world?
        </h1>
        <button className="flex items-center">Dark Mode</button>
      </section>
    </>
  );
}
