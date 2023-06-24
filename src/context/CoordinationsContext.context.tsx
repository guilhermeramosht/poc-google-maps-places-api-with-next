import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { Coordinations } from "@/pages";

interface CoordinationsContextProps {
  originCoordinations: undefined | Coordinations;
  setOriginCoordinations: Dispatch<SetStateAction<Coordinations | undefined>>;
}

const CoordinationsContext = createContext<CoordinationsContextProps>({
  originCoordinations: undefined,
  setOriginCoordinations: () => {},
});

interface CoordinationsContextProviderProps {
  children: React.ReactNode;
}

const CoordinationsContextProvider: React.FC<
  CoordinationsContextProviderProps
> = ({ children }) => {
  const [originCoordinations, setOriginCoordinations] = useState<
    undefined | Coordinations
  >(undefined);

  const value = {
    originCoordinations,
    setOriginCoordinations,
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
