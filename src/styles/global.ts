import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-border-box;
    }

    html{
      scroll-behavior: smooth;
    }
    body {
        background: #293744;
       
       
    }
    h1 {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight: 400;

        @media (max-width: 576px) {
      
      font-size: 150%;
    }

    // Medium devices (tablets, 768px and up)
    @media (max-width: 768px) {
      
      font-size: 150%;
    }
    }
    h2 {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight: 300;
    }


.divLoading{
  margin-top: 25%;
}
    
    .normal {
    color: black;
    background-color: white;
  }
  .fighting {
    color: white;

    background-color: #b64d19;
  }
  .flying {
    color: white;

    background-color: #277ba1;
  }
  .poison {
    color: white;

    background-color: #823ec3;
  }
  .ground {
    color: white;

    background-color: #8a8331;
  }
  .rock {
    color: white;

    background-color: #715c3d;
  }
  .bug {
    color: white;

    background-color: #2f9651;
  }
  .ghost {
    color: white;

    background-color: #83417a;
  }
  .stell {
    background-color: #6c6c6c;
  }
  .fire {
    color: white;

    background-color: #a8282b;
  }
  .water {
    color: white;

    background-color: #145eab;
  }
  .grass {
    color: white;

    background-color: #7d8545;
  }
  .electric {
    color: white;

    background-color: #ba9a22;
  }
  .psychic {
    color: white;

    background-color: #452a8d;
  }
  .ice {
    color: white;

    background-color: #659dba;
  }
  .dragon {
    color: white;

    background-color: #d57931;
  }
  .dark {
    color: white;

    background-color: #232424;
  }
  .fairy {
    color: white;

    background-color: #ba65a0;
  }
  .shadow {
    color: white;

    background-color: #414141;
  }
  .unknown {
    color: white;

    background-color: #9a9a9a;
  }
`;
