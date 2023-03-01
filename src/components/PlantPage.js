import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

const plantAPI = "http://localhost:6001/plants";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
  fetch(plantAPI)
  .then(res => res.json())
  .then(setPlants);
  }, []);

  const addNewPlant = (myNewPlant) => {
    setPlants([...plants, myNewPlant])
  }

  const updateSearch = (searchInput) => {
    setSearchTerm(searchInput)
  }

  let filteredPlants = plants.filter(plant => plant.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant}/>
      <Search searchTerm={searchTerm} updateSearch={updateSearch}/>
      <PlantList plants={filteredPlants}/>
    </main>
  );
}

export default PlantPage;
