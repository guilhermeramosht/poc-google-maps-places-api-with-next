import {
  InterestingPlaceNearby,
  useCoordinationsContext,
} from "@/context/CoordinationsContext.context";
import AutocompleteField from "./common/AutocompleteField";
import { Coordinations } from "@/pages";
import { Button } from "@mui/material";

const InterestingPlaceNearbyForm = () => {
  const { interestingPlacesNearby, setInterestingPlacesNearby } =
    useCoordinationsContext();

  const handleSelection = (coordinations: Coordinations, address: string) => {
    setInterestingPlacesNearby([
      ...interestingPlacesNearby,
      { coordinations, address },
    ]);
  };

  const handleDeleteItem = (index: number) => {
    const interestingPlacesNearbyCopy: InterestingPlaceNearby[] = JSON.parse(
      JSON.stringify(interestingPlacesNearby)
    );
    interestingPlacesNearbyCopy.splice(index, 1);
    setInterestingPlacesNearby(interestingPlacesNearbyCopy);
  };

  return (
    <>
      <h2 className="text-xl font-semibold">
        What are some interesting places nearby your home?
      </h2>
      <AutocompleteField onSelection={handleSelection} />
      <ul className="flex flex-col gap-2">
        {interestingPlacesNearby.map((place, index) => (
          <li className="flex justify-between gap-8" key={place.address}>
            <span>{place.address}</span>
            <button
              onClick={() => handleDeleteItem(index)}
              className="text-red-500"
            >
              (remove)
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
export default InterestingPlaceNearbyForm;
