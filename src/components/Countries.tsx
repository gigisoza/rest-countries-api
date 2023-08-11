import { useState, useEffect } from "react";
import Article from "./Article";

export default function Countries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getCountries = async () => {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all");
        const data = await res.json();
        setCountries(data.slice(0, 10));
      } catch (error) {
        console.error(error);
      }
    };

    getCountries();
  }, []);

  return (
    <>
      {!countries ? (
        <h1 className="text-gray-900 font-bold uppercase tracking-wide flex items-center justify-center text-center h-screen text-4xl dark:text-white">
          Loading...
        </h1>
      ) : (
        <section>
          {countries.map((country) => (
            <Article key={country.name.common} {...country} />
          ))}
        </section>
      )}
    </>
  );
}
