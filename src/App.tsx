import React, { useState, FormEvent, useEffect } from "react";
import { useHistory } from "react-router-dom";
import logo from "./assets/img/logo.png";

import pokeball from "./assets/img/pokeball.png";
import search from "./assets/img/search.png";
import PokemomCard from "./components/PokemomCard";

import api from "./services/api";

import {
  Header,
  ButtonsContent,
  TypeButton,
  Form,
  PokeballContent,
} from "./styles/styles";
import { Container, Row, Col, Image, Spinner } from "react-bootstrap";

interface Pokemon {
  id: number;
  name: string;
  img: string;
  type: string[];
  height: string;
  weight: string;
}

function App() {
  const history = useHistory();
  const [newPokemon, setNewPokemon] = useState("");
  const [isLoading, setIsLoadind] = useState(false);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [pokemonsView, setPokemonsView] = useState<Pokemon[]>([]);

  async function getPokemons() {
    try {
      setIsLoadind(true);
      await api
        .get("/Biuni/PokemonGO-Pokedex/master/pokedex.json")
        .then((response) => {
          //faz algo
          console.log(response.data);
          const pokemon: Pokemon[] = response.data.pokemon;

          setPokemons(pokemon);
          setPokemonsView(pokemon);
          setIsLoadind(false);
        });
    } catch (error) {
      //caso que der errado
      console.log(error);
    }
  }

  useEffect(() => {
    getPokemons();
  }, []);

  async function handleFilterByNamePokemon(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();

    const pokemonsFilters: Pokemon[] = pokemons.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(newPokemon.toLowerCase());
    });

    setPokemonsView(pokemonsFilters);
  }

  async function handleFilterByNamePokemonClick(
    event: React.MouseEvent<HTMLElement>
  ): Promise<void> {
    event.preventDefault();

    const pokemonsFilters: Pokemon[] = pokemons.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(newPokemon.toLowerCase());
    });

    history.push("/#pokemonSection");
    setPokemonsView(pokemonsFilters);
  }

  async function handleIsEmpty(): Promise<void> {
    if (newPokemon === "") {
      setPokemonsView(pokemons);
    }
  }

  async function handleFilterByType(
    event: any,
    newType: string
  ): Promise<void> {
    const pokemonsFilters: Pokemon[] = pokemons.filter((pokemon) => {
      return pokemon.type
        .join(",")
        .toLowerCase()
        .includes(newType.toLowerCase());
    });

    setPokemonsView(pokemonsFilters);
  }

  const typeList: Array<string> = [
    "normal",
    "fighting",
    "flying",
    "poison",
    "ground",
    "rock",
    "bug",
    "ghost",
    "stell",
    "fire",
    "water",
    "grass",
    "electric",
    "psychic",
    "ice",
    "dragon",
    "dark",
    "fairy",
    "shadow",
    "unknown",
  ];

  return (
    <>
      {isLoading === false ? (
        <>
          <Header>
            <Container fluid>
              <Row className="text-center">
                <Col>
                  <Image
                    className="w-25 m-4 logoPokemom"
                    src={logo}
                    alt="logo pokemom"
                    fluid
                  />
                </Col>
              </Row>
              <Row className="text-center">
                <Col>
                  <h1 className="text-white">
                    Uma Pokedex completa criada em React JS
                  </h1>
                </Col>
              </Row>
              <Row className="text-center mt-5 mb-5">
                <Col>
                  <Form
                    onSubmit={handleFilterByNamePokemon}
                    className="d-flex justify-content-center"
                  >
                    <input
                      placeholder="Search a Pokemon"
                      value={newPokemon}
                      onChange={(e) => setNewPokemon(e.target.value)}
                      onKeyUp={handleIsEmpty}
                    />
                    <Image
                      src={search}
                      alt="search icon"
                      className="searchIcon"
                      onClick={handleFilterByNamePokemonClick}
                    />
                  </Form>
                </Col>
              </Row>
            </Container>

            <Container>
              <Row>
                <Col className="d-flex justify-content-center">
                  <PokeballContent>
                    <Image src={pokeball} alt="pokeball" height={37.5} />
                    <h2 className="ml-2 mb-0 text-white">Filter by type</h2>
                  </PokeballContent>
                </Col>
              </Row>
            </Container>
          </Header>

          <section>
            <ButtonsContent>
              <Container
                className="containerButtons text-center d-flex justify-content-center sticky-top"
                fluid
              >
                <Row className="text-center d-flex justify-content-center">
                  {typeList.map((typeItem: string) => (
                    <Col sm={1.5} className="mx-3">
                      <a href="#pokemomSection">
                        <TypeButton
                          onClick={(e) => handleFilterByType(e, typeItem)}
                          className={typeItem}
                        >
                          {typeItem.toUpperCase()}
                        </TypeButton>
                      </a>
                    </Col>
                  ))}
                </Row>
              </Container>
            </ButtonsContent>
          </section>

          <section id="pokemomSection">
            <Row className="m-4">
              {pokemonsView.length !== 0 ? (
                pokemonsView.map((item: Pokemon) => (
                  <PokemomCard
                    img={item.img}
                    name={item.name}
                    type={item.type}
                    height={item.height}
                    weight={item.weight}
                  />
                ))
              ) : (
                <Col>
                  <h1 className="text-center text-white my-3">
                    Pokemons não encontrado!
                  </h1>
                </Col>
              )}
            </Row>
          </section>
        </>
      ) : (
        <div className="d-flex justify-content-center divLoading">
          <Spinner animation="grow" variant="light" />
        </div>
      )}
    </>
  );
}

export default App;
