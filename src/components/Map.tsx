import { useCoordinationsContext } from "@/context/CoordinationsContext.context";
import useGetCurrentPosition from "@/hooks/useGetCurrentPosition";
import { GoogleMap, Marker } from "@react-google-maps/api";

const Map = () => {
  const { originCoordinations } = useCoordinationsContext();

  return (
    <div className="w-1/2 min-h-full">
      <GoogleMap
        zoom={14}
        center={originCoordinations}
        mapContainerClassName="w-full h-full"
      >
        {originCoordinations && (
          <Marker
            icon="http://localhost:3000/accommodation-3.svg"
            position={originCoordinations}
          />
        )}
      </GoogleMap>
    </div>
  );
};

export default Map;
