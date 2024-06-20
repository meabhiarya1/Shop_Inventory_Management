// context/MyContext.tsx
import { createContext, useContext } from 'react';

// Define the shape of your context value
interface MyContextType {
  toggleState: boolean;
  toggleStateHandler: () => void;
}

const MyContext = createContext<MyContextType | undefined>(undefined);

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyProvider');
  }
  return context;
};

export default MyContext;
