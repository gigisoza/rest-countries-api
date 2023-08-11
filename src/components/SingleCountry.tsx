import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function SingleCountry() {
  const [country, setCountry] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const getSingleCountry = async () => {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
        const data = await res.json();
        setCountry(data);
      } catch (error) {
        console.error(error);
      }
    };
  }, [name]);

  return (
    <>
      <section>
        {country.map((item) => (
          <div key={item.population}>
            <article>
              <img src={item.flags.svg} alt={item.name.common} />
            </article>
          </div>
        ))}
      </section>
    </>
  );
}
