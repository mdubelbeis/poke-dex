import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

interface HeaderProps {
  pokemonCounter: number;
  caughtPokemon?: number;
}

const Header: React.FC<HeaderProps> = ({ pokemonCounter, caughtPokemon }) => {
  const [search, setSearch] = useState<string>("");
  const navigate = useNavigate();

  const handlePokeSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/pokemon/${search}/`);
  };

  return (
    <header className="flex flex-col items-center justify-between gap-6 px-3 py-10 lg:flex-row">
      <Link to="/">
        <h1 className="text-5xl">PokeDex</h1>
      </Link>
      <Link to="/">
        <span className="text-2xl">Home</span>
      </Link>
      <Link to="/pokemon/team">
        <span className="text-2xl">My Team #</span>
        <span className="ml-1 text-2xl">{pokemonCounter}</span>
      </Link>
      <form onSubmit={handlePokeSearch}>
        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search for a Pokemon..."
              className="input-bordered input"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="btn-square btn" type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              {""}
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default Header;
