import { useCoordinationsContext } from "@/context/CoordinationsContext.context";
import useGetCurrentPosition from "@/hooks/useGetCurrentPosition";
import { GoogleMap } from "@react-google-maps/api";

const Map = () => {
  const { originCoordinations } = useCoordinationsContext();
  const { initialCoordinations } = useGetCurrentPosition();

  return (
    <div className="w-1/2 min-h-full">
      <GoogleMap
        zoom={14}
        center={originCoordinations ?? initialCoordinations}
        mapContainerClassName="w-full h-full"
      ></GoogleMap>
    </div>
  );
};

export default Map;
