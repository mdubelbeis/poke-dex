import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import PokemonPage from "./pages/PokemonPage";
import PokemonTeamPage from "./pages/PokemonTeamPage";
import axios from "axios";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: async () =>
          await axios.get("https://pokeapi.co/api/v2/pokemon?limit=30"),
        errorElement: <ErrorPage />,
      },
      {
        path: "/pokemon/:pokemonId/",
        element: <PokemonPage />,
        loader: async ({ params }) =>
          await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${params.pokemonId}/`
          ),
        errorElement: <ErrorPage />,
      },
      {
        path: "pokemon/team/",
        index: true,
        element: <PokemonTeamPage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default Router;
