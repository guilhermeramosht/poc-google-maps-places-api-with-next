import { Coordinations } from "@/pages";
import { Autocomplete, TextField } from "@mui/material";
import usePlacesAutocomplete, {
  Status as PlaceAutocompleteStatus,
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

const getOptions = (
  status: PlaceAutocompleteStatus,
  data: google.maps.places.AutocompletePrediction[]
) => {
  if (status !== "OK") return [];

  return data.map((item) => ({ label: item.description, id: item.id }));
};

interface AutocompleteFieldProps {
  onSelection: (value: Coordinations) => void;
  placeholder?: string;
}

const AutocompleteField: React.FC<AutocompleteFieldProps> = ({
  onSelection,
  placeholder,
}) => {
  const {
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
    onSelection({ lat, lng });
  };

  return (
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
          label={placeholder}
        />
      )}
    />
  );
};

export default AutocompleteField;
