import { createContext } from 'react';


const ProjContext = createContext();
const ProjProvider = ProjContext.Provider;
const ProjConsumer = ProjContext.Consumer;


export {ProjProvider, ProjConsumer, ProjContext};