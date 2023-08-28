import { Link, useRouteError } from "react-router-dom";

type Error = {
  message: string;
};

export default function CountriesError() {
  const error: Error = useRouteError();

  return (
    <div>
      <h2>Error</h2>
      <p>{error.message}</p>
      <Link to="/"></Link>
    </div>
  );
}
