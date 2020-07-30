import { createContext } from 'react';

    //import as:
    // import { UserContext } from './utils/UserContext';

    // where used, wrap in the UserContext.Provider tag, ex:

    // return (
    //     <UserContext.Provider value={user}>
    //         <div className="container">
    //             <User />
    //         </div>
    //     </UserContext.Provider>
    // );

const UserContext = createContext();
const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;
export {UserProvider, UserConsumer};