import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="mx-auto px-8 py-12 text-center justify-center items-center">
      <h2 className="font-bold text-4xl">Page not found</h2>
      <p className="py-8 text-red-400 text-2xl">
        &larr; &larr; &larr; Go to the <Link to="/">Homepage</Link>
      </p>
    </div>
  );
}
