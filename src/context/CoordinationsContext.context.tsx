import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { Coordinations } from "@/pages";

interface CoordinationsContextProps {
  searchedCoordinations: undefined | Coordinations;
  setSearchedCoordinations: Dispatch<SetStateAction<Coordinations | undefined>>;
}

const CoordinationsContext = createContext<CoordinationsContextProps>({
  searchedCoordinations: undefined,
  setSearchedCoordinations: () => {},
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

  const value = {
    searchedCoordinations,
    setSearchedCoordinations,
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
