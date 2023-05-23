import { describe, it, expect, vi } from "vitest";
import { MemoryRouter, useLoaderData } from "react-router-dom";
import TestRenderer from "react-test-renderer";
import HomePage from "../pages/HomePage";
import axios from "axios";

describe("HomePage.tsx", () => {
  describe("getPokemon()", () => {
    it("returns an api response from the pokeAPI of 30 Pokemon", async () => {
      vi.mock("axios");
      const pokeAPIResponse = {
        data: {
          count: 1279,
          next: "",
          previous: null,
          results: [
            {
              name: "bulbasaur",
              url: "https://pokeapi.co/api/v2/pokemon/1/",
            },
            {
              name: "ivysaur",
              url: "https://pokeapi.co/api/v2/pokemon/2/",
            },
            {
              name: "venusaur",
              url: "https://pokeapi.co/api/v2/pokemon/3/",
            },
            {
              name: "charmander",
              url: "https://pokeapi.co/api/v2/pokemon/4/",
            },
            {
              name: "charmeleon",
              url: "https://pokeapi.co/api/v2/pokemon/5/",
            },
            {
              name: "charizard",
              url: "https://pokeapi.co/api/v2/pokemon/6/",
            },
          ],
        },
      };
      // axios.get.mockResolvedValue(pokeAPIResponse);
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=6");
      const data = await response.json();
      const pokemon = data.results;

      expect(pokemon).toStrictEqual(pokeAPIResponse.data.results);
    });
  });

  it("tests html components in HomePage", () => {
    vi.mock("react-router-dom", async () => {
      const actual = await vi.importActual("react-router-dom");
      return {
        ...actual,
        useLoaderData: vi.fn(),
      };
    });
    const data = [
      { name: "pikachu" },
      { name: "pikachu" },
      { name: "pikachu" },
      { name: "pikachu" },
      { name: "pikachu" },
      { name: "pikachu" },
      { name: "pikachu" },
    ];
    console.log(data);
    useLoaderData.mockReturnValue(data);
    const home = TestRenderer.create(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    ).toJSON();
    console.log(home); // Won't work because of the useLoaderData mock

    // The top element of Home is an OL
    expect(home.type).toBe("main");
    // expect an h2 of HOME as the first child of Home.jsx
    expect(home.children[0].type).toBe("ul");
    // expect li items to render an anchor tag with a pokemons name as inner HTML
    // expect to have 8 children inside of Home.jsx
    expect(home.children.length).toBe(1);
  });
});
