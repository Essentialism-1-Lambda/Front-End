import { createContext } from 'react';


const ProjContext = createContext();
const ProjProvider = ProjContext.Provider;
const ProjConsumer = ProjContext.Consumer;


export {ProjProvider, ProjConsumer, ProjContext};


//import as:
    // import { ProjectContext } from '../Context/ProjectContext';
    // where used, wrap in the ProjectContext.Provider tag, ex:

        // return (
        //     <ProjectContext.Provider value={user}>
        //         <div className="container">
        //             <User />
        //         </div>
        //     </ProjectContext.Provider>
        // );