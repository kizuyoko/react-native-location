import { useEffect, useState } from "react";
import PlacesList from "../components/Places/PlacesList";
import { useIsFocused } from "@react-navigation/native";

function AllPlaces({ route }) {
  const [loadedPlaces, setLoadedPlaces] = useState([]);

  const isFocued = useIsFocused();

  useEffect(() => {
    if (isFocued && route.params) {
      setLoadedPlaces(curPlaces => [...curPlaces, route.params.place]);
    } 

  }, [isFocued, route]);

  return (
    <PlacesList places={loadedPlaces} />
  ); 
}

export default AllPlaces;