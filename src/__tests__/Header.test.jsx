import { describe, it, expect, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import TestRenderer from "react-test-renderer";
import Header from "../components/Header";

describe("Header.tsx", () => {
  it("will test components in Header.tsx", () => {
    const caughtPokemon = [{}, {}, {}];
    const header = TestRenderer.create(
      <MemoryRouter>
        <Header caughtPokemon={caughtPokemon} />
      </MemoryRouter>
    ).toJSON();
    console.log(header.children[2].props.href);

    // Links
    expect(header.children[0].type).toBe("a");
    expect(header.children[1].type).toBe("a");
    expect(header.children[2].type).toBe("a");
    // Links href
    expect(header.children[0].props.href).toBe("/");
    expect(header.children[1].props.href).toBe("/");
    expect(header.children[2].props.href).toBe("/pokemon/team");
    // Links text
    expect(header.children[0].children[0].children[0]).toBe("PokeDex");
    expect(header.children[1].children[0].children[0]).toBe("Home");
    expect(header.children[2].children[0].children[0]).toBe("My Team #");
    // Links onClick or onSubmit
    expect("onClick" in header.children[0].props).toBe(true);
    expect("onClick" in header.children[2].props).toBe(true);
    expect("onSubmit" in header.children[3].props).toBe(true);
    // Form to look for pokemon
    expect(header.children[3].type).toBe("form");
    expect(header.children[3].children[0].type).toBe("div");
    expect(header.children[3].children[0].children[0].type).toBe("div");
    expect(header.children[3].children[0].children[0].children[0].type).toBe(
      "input"
    );
    expect(
      header.children[3].children[0].children[0].children[0].props.placeholder
    ).toBe("Search for a Pokemon...");
    expect(
      "onChange" in header.children[3].children[0].children[0].children[0].props
    ).toBe(true);
  });
});
