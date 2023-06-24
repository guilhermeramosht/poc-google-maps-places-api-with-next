import { useCoordinationsContext } from "@/context/CoordinationsContext.context";
import AutocompleteField from "./common/AutocompleteField";
import { Coordinations } from "@/pages";

const UserAddressField = () => {
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

export default UserAddressField;
