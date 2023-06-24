import { DestinyProps } from "@/pages";
import { Autocomplete, TextField } from "@mui/material";
import usePlacesAutocomplete, {
  Status as PlaceAutocompleteStatus,
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

interface ItineraryProps {
  setDestinyLatLng: (value: DestinyProps) => void;
}

const getOptions = (
  status: PlaceAutocompleteStatus,
  data: google.maps.places.AutocompletePrediction[]
) => {
  if (status !== "OK") return [];

  return data.map((item) => ({ label: item.description, id: item.id }));
};

const Itinerary = ({ setDestinyLatLng }: ItineraryProps) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleUserSelection = async (address: string | undefined) => {
    if (!address) return;

    setValue(address, false);

    const [addressGeocode] = await getGeocode({ address });
    const { lat, lng } = getLatLng(addressGeocode);
    setDestinyLatLng({ lat, lng });
  };

  return (
    <div className="w-1/2 min-h-full flex flex-col justify-center items-center">
      <div className="p-8 w-full">
        <Autocomplete
          options={getOptions(status, data)}
          disablePortal
          className="w-full"
          clearOnEscape
          clearOnBlur
          onChange={(_, selectedAddress) =>
            handleUserSelection(selectedAddress?.label)
          }
          renderInput={(params) => (
            <TextField
              {...params}
              value={value}
              onBlur={clearSuggestions}
              onChange={(e) => setValue(e.target.value)}
              label="Where are you going?"
            />
          )}
        />
      </div>
    </div>
  );
};

export default Itinerary;
