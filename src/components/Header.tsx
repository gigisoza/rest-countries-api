import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const handleHomePage = () => {
    navigate("/");
  };

  return (
    <>
      <section className="flex justify-between py-5 px-8 items-center border-b-2 dark:text-white dark:bg-slate-800 dark:border-b-slate-800">
        <button type="button" onClick={handleHomePage}>
          <h1 className="font-extrabold md:text-3xl lg:text-4xl">
            Where in the world?
          </h1>
        </button>
        <button className="flex items-center">Dark Mode</button>
      </section>
    </>
  );
}
