import { useCoordinationsContext } from "@/context/CoordinationsContext.context";
import { GoogleMap } from "@react-google-maps/api";

const Map = () => {
  const { originCoordinations } = useCoordinationsContext();

  return (
    <div className="w-1/2 min-h-full">
      <GoogleMap
        zoom={14}
        center={originCoordinations}
        mapContainerClassName="w-full h-full"
      ></GoogleMap>
    </div>
  );
};

export default Map;
