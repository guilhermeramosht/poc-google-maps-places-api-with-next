import { Coordinations } from "@/pages";
import { useEffect, useState } from "react";

const useGetCurrentPosition = () => {
  const [initialCoordinations, setInitialCoordinations] = useState<
    undefined | Coordinations
  >(undefined);
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
    setInitialCoordinations({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    });
  };

  const handleErrorOnUsersLocation = (error: any) => {
    console.log({ error });
  };

  return { initialCoordinations };
};

export default useGetCurrentPosition;
