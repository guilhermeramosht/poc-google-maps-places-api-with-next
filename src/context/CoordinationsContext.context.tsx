import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { Coordinations } from "@/pages";

export interface InterestingPlaceNearby {
  coordinations: Coordinations;
  address: string;
}

interface CoordinationsContextProps {
  searchedCoordinations: undefined | Coordinations;
  setSearchedCoordinations: Dispatch<SetStateAction<Coordinations | undefined>>;
  interestingPlacesNearby: InterestingPlaceNearby[];
  setInterestingPlacesNearby: Dispatch<
    SetStateAction<InterestingPlaceNearby[]>
  >;
}

const CoordinationsContext = createContext<CoordinationsContextProps>({
  searchedCoordinations: undefined,
  setSearchedCoordinations: () => {},
  interestingPlacesNearby: [],
  setInterestingPlacesNearby: () => {},
});

interface CoordinationsContextProviderProps {
  children: React.ReactNode;
}

const CoordinationsContextProvider: React.FC<
  CoordinationsContextProviderProps
> = ({ children }) => {
  const [searchedCoordinations, setSearchedCoordinations] = useState<
    undefined | Coordinations
  >(undefined);
  const [interestingPlacesNearby, setInterestingPlacesNearby] = useState<
    InterestingPlaceNearby[]
  >([]);

  const value = {
    searchedCoordinations,
    setSearchedCoordinations,
    interestingPlacesNearby,
    setInterestingPlacesNearby,
  };

  return (
    <CoordinationsContext.Provider value={value}>
      {children}
    </CoordinationsContext.Provider>
  );
};

const useCoordinationsContext = () => {
  return useContext(CoordinationsContext);
};

export { CoordinationsContextProvider, useCoordinationsContext };
