import { ScrollView, Image, View, StyleSheet, Text } from "react-native";
import OutlinedButton from "../UI/OutlinedButton";
import { Colors } from "../constans/colors";
import { useEffect, useState } from "react";
import { fetchPlaceDetails } from "../util/database";

function PlaceDetails({ route, navigation }) {
  const [fetchedPlace, setFetchedPlace] = useState();

  function showOnMapHandler() {
    navigation.navigate('Map', {
      initialLat: fetchedPlace.location.lat,
      initialLng: fetchedPlace.location.lng,
    });
  }

  const selectedPlaceId = route.params.placeId;

  useEffect(() => {
    async function loadPlaceData() {
      console.log("Loading place data for ID:", selectedPlaceId);
      try {
        const place = await fetchPlaceDetails(selectedPlaceId);
        console.log("Fetched place:", place);
        setFetchedPlace(place);
        navigation.setOptions({
          title: place.title, 
        });
      } catch (error) {
        console.error("Error fetching place details:", error);
      }
    }

    loadPlaceData();
  }, [selectedPlaceId]);

  if (!fetchedPlace) {
    return (
      <Text style={styles.fallback}>
        Loading place data...
      </Text>
    );
  }

  return (
    <ScrollView>
      <Image 
        style={styles.image} 
        source={{uri: fetchedPlace.imageUri}}
      />
      <View style={styles.localContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>
            {fetchedPlace.address}
          </Text>
        </View>
      </View>
      <OutlinedButton 
        icon='map'
        onPress={showOnMapHandler}
      >
        View on Map
      </OutlinedButton>
    </ScrollView>
  ); 
 }
 
 export default PlaceDetails;

 const styles = StyleSheet.create({
  fallback: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: Colors.primary50,
  },
  image: {
    height: '35%',
    minHeight: 300,
    width: '100%',
  },
  localContainer: {
    justifyContent: 'center',
    align: 'center',
  },
  addressContainer: {
    padding: 20,
  },
  address: {
    color: Colors.primary500,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,

  }

 });