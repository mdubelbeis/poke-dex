import { Outlet, useOutletContext } from "react-router-dom";
import Header from "./components/Header";
import { useState } from "react";

interface ContextType {
  pokemonCounter: number;
  setPokemonCounter: (value: number) => void;
  pokemonCaught: [];
  setPokemonCaught: (value: []) => void;
}

function App() {
  const [pokemonCounter, setPokemonCounter] = useState<number>(0);
  const [pokemonCaught, setPokemonCaught] = useState<[]>([]);

  return (
    <>
      <Header pokemonCounter={pokemonCounter} />
      <Outlet
        context={[
          pokemonCounter,
          setPokemonCounter,
          pokemonCaught,
          setPokemonCaught,
        ]}
      />
    </>
  );
}

export const useAppContext = () => {
  return useOutletContext<ContextType>();
};

export default App;
