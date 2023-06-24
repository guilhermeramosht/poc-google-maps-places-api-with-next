import Itinerary from "@/components/Itinerary";
import Map from "@/components/Map";
import { useLoadScript } from "@react-google-maps/api";
import { useEffect, useState } from "react";

export interface DestinyProps {
  lat: number;
  lng: number;
}

const App = () => {
  const [destinyLatLng, setDestinyLatLng] = useState<undefined | DestinyProps>(
    undefined
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string,
    libraries: ["places"],
  });

  useEffect(() => {
    if (!navigator.geolocation) {
      console.error(`Your browser doesn't support Geolocation`);
    }

    navigator.geolocation.getCurrentPosition(
      handleProcessUsersLocation,
      handleErrorOnUsersLocation
    );
  }, []);

  const handleProcessUsersLocation = (position: any) => {
    setDestinyLatLng({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    });
  };

  const handleErrorOnUsersLocation = (error: any) => {
    console.log({ error });
  };

  if (!isLoaded || !destinyLatLng) return <div>Loading...</div>;

  return (
    <div className="flex min-h-full">
      <Itinerary setDestinyLatLng={setDestinyLatLng} />
      <Map destinyLatLng={destinyLatLng} />
    </div>
  );
};

export default App;
