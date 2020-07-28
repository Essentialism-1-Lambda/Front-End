import { createContext } from 'react';


//import as:
// import { UserContext } from './utils/UserContext';



// where used, wrap in the UserContext.Provider tag

// return (
//     <UserContext.Provider value={user}>
//         <div className="container">
//             <User />
//         </div>
//     </UserContext.Provider>
// );

export const UserContext = createContext();