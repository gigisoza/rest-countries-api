type Flags = {
  svg: string;
};

type Name = {
  common: string;
};

interface Props {
  flags: Flags;
  name: Name;
  population: string;
  region: string;
  subregion: string;
}

export default function Article({
  flags,
  name,
  population,
  region,
  subregion,
}: Props) {
  return (
    <>
      <article className="bg-white rounded-lg shadow overflow-hidden">
        <img src={flags.svg} alt="" className="md:h-72 w-full object-cover" />
        <div className="p-4">
          <h2 className="font-bold text-lg text-gray-900 mb-2">
            {name.common}
          </h2>
          <ul className="flex flex-col items-start justify-start gap-2">
            <li>Population: {population.toLocaleString()}</li>
            <li>Region: {region}</li>
            <li>Subregion: {subregion}</li>
          </ul>
        </div>
      </article>
    </>
  );
}
