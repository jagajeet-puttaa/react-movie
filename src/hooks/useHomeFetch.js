import { useState, useEffect, useRef } from "react";

//API 

import API from '../API';

// Helpers 

import { isPersistedState } from "../helpers";

const initialState = {

    page: 0,
    results : [],
    total_pages : 0,
    total_results : 0,
};

export const useHomeFetch = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [state,setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    // console.log(searchTerm);

    const fetchMovies = async(page,searchTerm = "") =>
    {
        try{

            setError(false);
            setLoading(true);

            const movies = await API.fetchMovies(searchTerm,page);
            
            setState(prev => ({

                ...movies,
                results : 
                    page > 1 ? [...prev.results, ...movies.results] : [...movies.results]

            }));
        }
        catch(error)
        {
            setError(true);
        }

        setLoading(false);

    }

    // We need to run this once while mounting the home component. [] means it will just run once. Doesnt depend on other factors.
    // Initial Render

    useEffect(() => {

        if(!searchTerm){
            console.log("Grabbing form session storage");
            const sessionState = isPersistedState('homeState');

            if(sessionState){
                setState(sessionState);
                return;
            }
        }

        console.log("Grabbing form API");
        setState(initialState);
        fetchMovies(1,searchTerm);

    }, [searchTerm]);

    // Loading more data

    useEffect(() => {

        if(!isLoadingMore) return; 

        fetchMovies(state.page + 1,searchTerm);
        setIsLoadingMore(false);

    },[isLoadingMore,searchTerm,state.page])

    // Writing the session storage 

    useEffect(() => {
        if(!searchTerm){
            // Only strings can be written into the session storage
            sessionStorage.setItem('homeState',JSON.stringify(state));
        }
    },[searchTerm,state]);

    return {state,loading,error,searchTerm,setSearchTerm, setIsLoadingMore};
    
}