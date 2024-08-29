import { useEffect, useState } from "react";
import PlacesList from "../components/Places/PlacesList";
import { useIsFocused } from "@react-navigation/native";
import { fetchPlaces } from "../util/database";

function AllPlaces({ route }) {
  const [loadedPlaces, setLoadedPlaces] = useState([]);

  const isFocued = useIsFocused();

  useEffect(() => {
    async function loadedPlaces() {
      const places = await fetchPlaces();
      setLoadedPlaces(places);
    }

    if (isFocued) {
      loadedPlaces();
      // setLoadedPlaces(curPlaces => [...curPlaces, route.params.place]);
    } 

  }, [isFocued]);

  return (
    <PlacesList places={loadedPlaces} />
  ); 
}

export default AllPlaces;