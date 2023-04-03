import { createContext, useState } from "react";
import { PassportAppType } from "../typings/PassportAppType";

const defaultPassportApp: PassportAppType = {
  date: null,
  time: null,
  user: null,
  handleUpdate: (data: any) => {},
};

export const PassportAppContext =
  createContext<PassportAppType>(defaultPassportApp);

export const PassportAppProvider = ({ children }: any) => {
  const [value, setValue] = useState<PassportAppType>(defaultPassportApp);

  const handleUpdate = (data: Partial<PassportAppType>) => {
    setValue({ ...value, ...data });
  };

  return (
    <PassportAppContext.Provider value={{ ...value, handleUpdate }}>
      {children}
    </PassportAppContext.Provider>
  );
};
