import { useCoordinationsContext } from "@/context/CoordinationsContext.context";
import AutocompleteField from "./AutocompleteField";
import { Coordinations } from "@/pages";

const PlaceField = () => {
  const { setSearchedCoordinations } = useCoordinationsContext();
  const handleSelection = (usersearchedCoordinations: Coordinations) => {
    if (!usersearchedCoordinations) return;
    setSearchedCoordinations(usersearchedCoordinations);
  };
  return (
    <AutocompleteField
      onSelection={handleSelection}
      placeholder="Where do you live?"
    />
  );
};

export default PlaceField;
