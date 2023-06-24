import YourHomeField from "@/components/YourHomeField";
import Map from "@/components/Map";
import { useLoadScript } from "@react-google-maps/api";
import useGetCurrentPosition from "@/hooks/useGetCurrentPosition";
import { useCoordinationsContext } from "@/context/CoordinationsContext.context";
import UserAddressField from "@/components/UserHomeField";

export interface Coordinations {
  lat: number;
  lng: number;
}

const App = () => {
  const { originCoordinations } = useCoordinationsContext();
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string,
    libraries: ["places"],
  });

  useGetCurrentPosition();

  if (!isLoaded || !originCoordinations) return <div>Loading...</div>;

  return (
    <div className="flex min-h-full">
      <div className="w-1/2 min-h-full flex justify-center items-center">
        <div className="p-8 w-full flex flex-col gap-4">
          <UserAddressField />
        </div>
      </div>
      <Map />
    </div>
  );
};

export default App;
