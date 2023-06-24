import { useCoordinationsContext } from "@/context/CoordinationsContext.context";
import { useCallback, useEffect } from "react";

const useGetCurrentPosition = () => {
  const { setOriginCoordinations } = useCoordinationsContext();

  const handleProcessUsersLocation = useCallback(
    (position: any) => {
      setOriginCoordinations({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    },
    [setOriginCoordinations]
  );

  useEffect(() => {
    if (!navigator.geolocation) {
      console.error(`Your browser doesn't support Geolocation`);
    }

    navigator.geolocation.getCurrentPosition(
      handleProcessUsersLocation,
      handleErrorOnUsersLocation
    );
  }, [handleProcessUsersLocation]);

  const handleErrorOnUsersLocation = (error: any) => {
    console.log({ error });
  };
};

export default useGetCurrentPosition;
