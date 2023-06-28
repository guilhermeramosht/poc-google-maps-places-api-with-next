import { useCoordinationsContext } from "@/context/CoordinationsContext.context";
import useGetCurrentPosition from "@/hooks/useGetCurrentPosition";
import { GoogleMap, Marker } from "@react-google-maps/api";

const Map = () => {
  const { searchedCoordinations, interestingPlacesNearby } =
    useCoordinationsContext();
  const { initialCoordinations } = useGetCurrentPosition();

  return (
    <div className="w-1/2 min-h-full">
      <GoogleMap
        zoom={14}
        center={searchedCoordinations ?? initialCoordinations}
        mapContainerClassName="w-full h-full"
      >
        {interestingPlacesNearby.length &&
          interestingPlacesNearby.map(({ coordinations }) => (
            <Marker
              key={JSON.stringify(coordinations)}
              position={coordinations}
            />
          ))}
      </GoogleMap>
    </div>
  );
};

export default Map;
