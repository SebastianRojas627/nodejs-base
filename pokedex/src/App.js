import "./App.css";
import React, { useState, useEffect } from "react";
import { PokeCard } from "./components/PokeCard";
import { MyComponent } from "./components/MyComponent";
import API from "./config/api";

function App() {
  const [trainer, setTrainer] = useState();
  const getTrainerId = async () => {
    const trainerReponse = await API.get(`/trainer/1`);
    const { data } = trainerReponse;
    setTrainer(data.trainer[0]);
  };
  useEffect(() => {
    getTrainerId();
  }, []);

  return <>{trainer && <PokeCard idPokemon={trainer.id_pokemon}></PokeCard>}</>;
}

export default App;