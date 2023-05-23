import { Link } from "react-router-dom";
import PokeSizes from "./PokeSizes";
import PokeSkills from "./PokeSkills";

interface PokemonCardProps {
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  moves: any[];
  sprites: any;
  bgColor: string;
  onClick: () => void;
}

const PokemonCard: React.FC<PokemonCardProps> = ({
  name,
  base_experience,
  height,
  weight,
  moves,
  sprites,
  bgColor,
  onClick: handleCatchOrRelease,
}) => {
  return (
    <div
      className={`flex w-full flex-col items-center gap-7 ${bgColor} py-32 font-nintendo text-black`}
    >
      <div className={`flex`}>
        <h1 className="text-3xl text-black">{name.toUpperCase()}</h1>
        <span>{base_experience} EXP.</span>
      </div>
      <div className="animate-bounce">
        <img src={sprites.front_default} alt={name} className="w-44" />
      </div>
      <div className="flex w-10/12 max-w-xl items-center justify-around rounded-md border-[10px] border-black bg-slate-50 p-10 text-center shadow-xl">
        <PokeSizes height={height} weight={weight} />
        <PokeSkills moves={moves} />
      </div>
      <div className="flex flex-col gap-3 md:flex-row md:gap-8">
        <Link to="/">
          <button className="btn-primary btn border-[6px] border-black shadow-xl">
            Home
          </button>
        </Link>
        <button
          onClick={handleCatchOrRelease}
          className="btn-secondary btn border-[6px] border-black shadow-xl"
        >
          Catch/Release
        </button>
      </div>
    </div>
  );
};

export default PokemonCard;
