import { createContext } from 'react';

const ValueContext = createContext();
const ValueProvider = ValueContext.Provider;
const ValueConsumer = ValueContext.Consumer;
export {ValueProvider, ValueConsumer};