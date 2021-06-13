import styled from "styled-components";

import search from "../assets/img/search.png";

export const Header = styled.header`
  .logoPokemom {
    min-width: 250px;
  }
`;

export const PokeballContent = styled.div`
  display: flex;
  place-content: center;
  margin-bottom: 20px;

  h2 {
    font-size: calc(0.4464285714285714vw + 24.571428571428573px);

    @media (min-width: 768px) {
      font-size: calc(0.33783783783783783vw + 25.405405405405407px);
    }
    @media (min-width: 1360px) {
      font-size: calc(0.35714285714285715vw + 25.142857142857142px);
    }
    @media (min-width: 1920px) {
      font-size: 32px;
    }
  }
`;

export const Form = styled.form`
  input {
    width: 46%;
    font-size: 200%;

    border: none;
    padding: 15px;

    &::placeholder {
      color: #293744;
    }

    background: url(${search}) no-repeat scroll;
    background-position: 95% 50%;
    background-size: 30px;
    background-color: white;

    @media (max-width: 576px) {
      width: 100%;
      font-size: 150%;
    }

    // Medium devices (tablets, 768px and up)
    @media (max-width: 768px) {
      width: 100%;
      font-size: 150%;
    }
  }
`;

export const ButtonsContent = styled.div`
  height: auto;
  border-top: 1px solid #236aa9;
  border-bottom: 1px solid #236aa9;
  padding-left: 10px;
  margin-right: 35px;
  margin-left: 35px;

  .containerButtons {
    max-width: 80vw;
  }

  .normal {
    color: black;
    background-color: white;
  }
  .fighting {
    background-color: #b64d19;
  }
  .flying {
    background-color: #277ba1;
  }
  .poison {
    background-color: #823ec3;
  }
  .ground {
    background-color: #8a8331;
  }
  .rock {
    background-color: #715c3d;
  }
  .bug {
    background-color: #2f9651;
  }
  .ghost {
    background-color: #83417a;
  }
  .stell {
    background-color: #6c6c6c;
  }
  .fire {
    background-color: #a8282b;
  }
  .water {
    background-color: #145eab;
  }
  .grass {
    background-color: #7d8545;
  }
  .electric {
    background-color: #ba9a22;
  }
  .psychic {
    background-color: #452a8d;
  }
  .ice {
    background-color: #659dba;
  }
  .dragon {
    background-color: #d57931;
  }
  .dark {
    background-color: #232424;
  }
  .fairy {
    background-color: #ba65a0;
  }
  .shadow {
    background-color: #414141;
  }
  .unknown {
    background-color: #9a9a9a;
  }
`;

export const TypeButton = styled.button`
  color: white;
  width: 125px;
  height: 50px;

  @media (max-width: 576px) {
    width: 100px;
    height: 30px;
    font-size: 14px;
  }
  border: none;
  text-align: center;

  margin-top: 20px;
  margin-bottom: 10px;
  border-radius: 30px;
  font-size: 20px;
  font-weight: bolder;
`;

export const Card = styled.div`
  width: 80%;
  padding-bottom: 5%;
  border-radius: 15%;

  img {
    width: 55%;
  }
  h1 {
    font-weight: 700;
    font-size: 200%;
  }
  h2 {
    font-weight: 200;

    font-size: 100%;
  }
`;
