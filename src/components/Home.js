import React from 'react';

// Config 

import {POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from '../config';

//Components

import HeroImage  from './HeroImage';
import Grid from './Grid';
import Thumb from './Thumb';
import Spinner from './Spinner';
import SearchBar from './SearchBar';
import Button from './Button';

//Hooks 

import { useHomeFetch } from '../hooks/useHomeFetch';

// Image

import NoImage from '../images/no_image.jpg';

const Home = () => {

    const {state,loading,error,searchTerm,setSearchTerm, setIsLoadingMore} = useHomeFetch();

    console.log(state);

    if(error) {return <div>Something went wrong..</div>};

    return (
        <>
            {!searchTerm && state.results[0] ? (

                <HeroImage
                    image = {`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                    title = {state.results[0].original_title}
                    text =  {state.results[0].overview}
                />
            ) : null}
            <SearchBar setSearchTerm = {setSearchTerm} />
            <Grid header= { !searchTerm ? 'Popular Movies' : 'Search Result'}>

                  {state.results.map(movie => (
                        <Thumb
                            key = {movie.id}
                            clickable
                            image={
                                movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : NoImage
                            }
                            movieId={movie.id}
                        />
                  ))}

            </Grid>
            
            {/* Showing the spinner only while the data is loading */}

            {loading && <Spinner/>}

            {/* Showing the show more button only when more pages are available and it is not currently loading */}

            {state.page < state.total_pages && !loading && (

                //Using an inline function because we need to pass it with an arguement. If not so we can just specify the function name.

                <Button text='Load More' callback={() => setIsLoadingMore(true)}/>
            )}
        </>
    );
};

export default Home;