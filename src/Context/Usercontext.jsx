import React, { createContext, useState } from 'react'; // Ensure React and useState are imported

// Export dataContext directly so it can be imported by useContext
export const dataContext = createContext(null); // Added null as initial context value

// Rename the component to clearly indicate it's a provider
function UserContextProvider({ children }) {
    let [title, setTitle] = useState("");
    let [addListing, setaddListing] = useState(false);
    let [addImage1, setaddImage1] = useState(null);
    let [addImage2, setaddImage2] = useState(null);
    let [addImage3, setaddImage3] = useState(null);
    let [price, setprice] = useState(null);

    let value = {
        title,
        setTitle,
        addListing,
        setaddListing,
        addImage1,
        setaddImage1,
        addImage2,
        setaddImage2,
        addImage3,
        setaddImage3,
        price,
        setprice,
       
    };

    return (
        <dataContext.Provider value={value}>
            {children}
        </dataContext.Provider>
    );
}

// Export the provider component as the default export
export default UserContextProvider;