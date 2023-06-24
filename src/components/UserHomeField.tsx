import { useCoordinationsContext } from "@/context/CoordinationsContext.context";
import AutocompleteField from "./common/AutocompleteField";
import { Coordinations } from "@/pages";

const UserAddressField = () => {
  const { setOriginCoordinations } = useCoordinationsContext();
  const handleSelection = (userOriginCoordinations: Coordinations) => {
    if (!userOriginCoordinations) return;
    setOriginCoordinations(userOriginCoordinations);
  };
  return (
    <AutocompleteField
      onSelection={handleSelection}
      placeholder="Where do you live?"
    />
  );
};

export default UserAddressField;
