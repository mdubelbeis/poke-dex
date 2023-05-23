import { useEffect, useState } from "react";
import { useAppContext } from "../App";

const PokemonTeamPage: React.FC = () => {
  const appContext = useAppContext();

  return (
    <div className="flex flex-col items-center justify-center gap-20 bg-white py-44">
      <h2 className="text-7xl text-black">MY POKEMON TEAM</h2>
      <div className="flex flex-col items-center justify-center gap-10">
        {appContext[2].map((pokemon: string) => (
          <div className="flex h-32 w-32 animate-pulse flex-col items-center justify-center gap-10 rounded-full border-[1px] border-black bg-pokeball bg-cover bg-center">
            <h3 className="text-5xl uppercase tracking-wider text-black">
              {pokemon}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonTeamPage;
