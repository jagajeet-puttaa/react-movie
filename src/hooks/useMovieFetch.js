import { memo, useEffect, useState } from "react";

// API 

import API from '../API';

export const useMovieFetch = movieId => {

    const [state, setState] = useState({});
    const [loading, setLoading] = useState(true);
    const [error,setError] = useState(false);

    useEffect(() => {

        const fetchMovie = async () => {

            try{

                setLoading(true);
                setError(false);

                const movie = await API.fetchMovie(movieId);
                const credits = await API.fetchCredits(movieId);

                const directors = credits.crew.filter(
                    member => member.job === "Director"
                );

                setState({
                    ...movie,
                    actors : credits.cast,
                    // directors below is same as saying directors : directors
                    directors
                })

                setLoading(false);
            }
            catch(error)
            {
                setError(true);
            }
        };

        // Invoking the fetch movie function
        fetchMovie();

    },[movieId]);

    return {state,loading,error};

}