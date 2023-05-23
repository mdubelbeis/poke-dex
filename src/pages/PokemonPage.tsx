import { Link, useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAppContext } from "../App";
import PokemonCard from "../components/PokemonCard";

const PokemonPage: React.FC = () => {
  const [bgColor, setBgColor] = useState<string>("bg-white");
  const pokemon = useLoaderData() as any;
  const appContext = useAppContext();
  const { id, name, base_experience, height, weight, moves, types, sprites } =
    pokemon.data;
  const mainType = types[0].type.name;

  const handleCatchOrRelease = () => {
    if (!appContext[2].includes(name)) {
      // Increment the counter
      appContext[1](appContext[0] + 1);
      // Add the pokemon to the array
      appContext[3]([...appContext[2], name]);
      return;
    } else {
      // Decrement the counter
      appContext[1](appContext[0] - 1);
      appContext[3](appContext[2].filter((poke: string) => poke !== name));
    }
  };

  useEffect(() => {
    switch (mainType) {
      case "grass":
      case "bug":
        setBgColor("bg-poke-grass");
        break;
      case "normal":
      case "fighting":
        setBgColor("bg-poke-normal");
        break;
      case "rock":
      case "ground":
        setBgColor("bg-poke-rock");
        break;
      case "poison":
      case "psychic":
        setBgColor("bg-poke-poison");
        break;
      case "dragon":
      case "steel":
        setBgColor("bg-poke-dragon");
        break;
      case "flying":
      case "ice":
        setBgColor("bg-poke-flying");
        break;
      case "ghost":
      case "dark":
        setBgColor("bg-poke-ghost");
        break;
      case "water":
        setBgColor("bg-poke-water");
        break;
      case "fairy":
        setBgColor("bg-poke-fairy");
        break;
      case "fire":
        setBgColor("bg-poke-fire");
        break;
      case "electric":
        setBgColor("bg-poke-electric");
        break;
      default:
        setBgColor("bg-white");
    }
  }, [mainType]);

  return (
    <main>
      <PokemonCard
        name={name}
        base_experience={base_experience}
        height={height}
        weight={weight}
        moves={moves}
        sprites={sprites}
        bgColor={bgColor}
        onClick={handleCatchOrRelease}
      />
    </main>
  );
};

export default PokemonPage;
