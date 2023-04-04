import React, { createContext, useState, useEffect } from "react";

import { fetchData } from "../api/videoApi";
export const Context = createContext();

export const AppContext = (props) => {
    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("New");
    const [sideNavHamburger, setSideNavHamburger] = useState(false);

    useEffect(() => {
        fetchSelectedCategoryData(selectedCategory);
    }, [selectedCategory]);

    const fetchSelectedCategoryData = async (query) => {
        setLoading(true);
        fetchData(`search/?q=${query}`)
          .then(({ contents }) => {
            console.log(contents);
            setSearchResults(contents);
            setLoading(false);
        });
    };

    return (
        <Context.Provider
            value={{
                loading,
                setLoading,
                searchResults,
                selectedCategory,
                setSelectedCategory,
                sideNavHamburger,
                setSideNavHamburger,
            }}
        >
            {props.children}
        </Context.Provider>
    );
};