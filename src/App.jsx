
import React from "react";
import "./App.css";
import { useState } from "react";

const movies = {
  action: [
    {
      name: "Rampage",
      year: "2018",
      rate: "6.1/10", 
      desc:
        "Primatologist Davis Okoye teams up with a geneticist, Dr Kate Caldwell, and tries to save George, an albino gorilla, and prevent two giant mutated animals from wreaking havoc in Chicago."
    },
    {
      name: "Deadpool",
      year: "2016",
      rate: "8/10",
      desc:
        "Ajax, a twisted scientist, experiments on Wade Wilson, a mercenary, to cure him of cancer and give him healing powers. However, the experiment leaves Wade disfigured and he decides to exact revenge."
    },
    {
      name: "Jumanji: Welcome to the Jungle",
      year: "2017",
      rate: "6.9/10",
      desc:
        "When four students play with a magical video game, they are drawn to the jungle world of Jumanji, where they are trapped as their avatars. To return to the real world, they must finish the game"
    }
  ],

  SciFiFantasy: [
    {
      name: "Zathura : A Space Adventure",
      year: "2005",
      rate: "7.9/10",
      desc:
        "Two young brothers find themselves transported into the depths of space while playing a board game. They try their best to find their way back to Earth."
    },
    {
      name: "Interstellar",
      year: "2014",
      rate: "8.6/10",
      desc:
        "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans."
    },
    {
      name: "Dune",
      year: "2021",
      rate: "8/10",
      desc:
        "Paul Atreides arrives on Arrakis after his father accepts the stewardship of the dangerous planet. However, chaos ensues after a betrayal as forces clash to control melange, a precious resource."
    }
  ],
  horror: [
    {
      name: "It Chapter Two",
      year: "2019",
      rate: "6.5/10",
      desc:
        "After 27 years, the Losers Club receive a call from their friend Mike Hanlon that Pennywise is back. They decide to honour their promise and return to their old town to end the evil clown for good."
    },
    {
      name: "A Quiet place",
      year: "2018",
      rate: "7.5/10",
      desc:
        "In a post-apocalyptic world, a family is forced to live in silence while hiding from monsters with ultra-sensitive hearing."
    },
    {
      name: "Annabelle Comes Home",
      year: "2019",
      rate: "5.9/10",
      desc:
        "Judy and her babysitter are left alone in her house after her parents leave to investigate a case. However, an unexpected guest sets Annabelle free, unleashing demonic activity in the house."
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("action");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1 style={{ color: "#1d4ed8" }}> movie Recommendation </h1>
      <p style={{ fontSize: "18px", color: "#e3e3e3" }}>
        {" "}
    Some of the movie suggestions to experience something different.
      </p>

      <div>
        {Object.keys(movies).map((genre) => (
          <button key={genre}className="btn" onClick={() => genreClickHandler(genre)}>
            {genre}
          </button>
        ))}
      </div>
      <hr style={{ color: "white" }} />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {movies[selectedGenre].map((movie) => (
            <li key={movie.name} className="card">
              {" "}
              <div style={{ fontSize: "larger", color: "#1d4ed8" }}>
                {" "}
                {movie.name}{" "}
              </div>
              <div style={{ fontSize: "smaller", display: "inline-block" }}>
                {" "}
                {movie.year}{" "}
              </div>{" "}
              &nbsp;
              <div
                style={{
                  fontSize: "smaller",
                  display: "inline-block",
                  
                }}
              >
                {" "}
                {movie.rate}{" "}
              </div>
              <div
                style={{
                  fontSize: "smaller",
                  padding: "4px",
                }}
              >
                {" "}
                {movie.desc}{" "}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}