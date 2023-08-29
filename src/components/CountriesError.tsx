import { Link, useRouteError } from "react-router-dom";

type Error = {
  message: string;
};

export default function CountriesError() {
  const error = useRouteError() as Error;
  console.log(error);

  return (
    <div className="mx-auto px-8 py-12 text-center justify-center items-center">
      <h2 className="font-bold text-4xl">This page doesn't exists</h2>
      <button className="py-8 text-red-400 text-2xl">
        &larr; &larr; &larr; <Link to="/">Go back to Home Page</Link>
      </button>
    </div>
  );
}
