import { Link, useLoaderData } from "react-router-dom";

const HomePage: React.FC = () => {
  const pokemon = useLoaderData() as any;
  const { results } = pokemon.data || [];
  return (
    <main className="flex min-h-fit flex-col items-center justify-center gap-10 bg-white p-10">
      <ul className="grid w-full grid-cols-1 gap-5 text-center md:grid-cols-2 lg:grid-cols-4">
        {results &&
          results.map((pokemon: any) => (
            <li
              className="rounded-lg bg-slate-200 px-3 py-7 uppercase"
              key={pokemon.name}
            >
              <Link to={`pokemon/${pokemon.name}/`}>
                <div className="flex flex-col justify-between gap-3">
                  <span className="text-2xl text-slate-700">
                    {pokemon.name}
                  </span>
                </div>
              </Link>
              <a className="text-lg text-blue-700" href={pokemon.url}>
                Visit API
              </a>
            </li>
          ))}
      </ul>
    </main>
  );
};

export default HomePage;
