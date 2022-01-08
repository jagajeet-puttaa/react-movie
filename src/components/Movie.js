import React from "react";

import { useParams } from "react-router-dom";

//Config 

import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";

// Components 

import Grid from "./Grid";
import Spinner from "./Spinner";
import BreadCrumb from "./BreadCrumb";

// Hook

import { useMovieFetch } from "../hooks/useMovieFetch";

// Image

import NoImage from '../images/no_image.jpg';
import MovieInfo from "./MovieInfo";
import MovieInfoBar from "./MovieInfoBar";
import Actor from "./Actor";

const Movie = () => {

    // Getting the movieid from the router path
    const {movieId} = useParams();

    const {state: movie,loading,error} = useMovieFetch(movieId);

    if(loading) return <Spinner/>;

    if(error) return <div> Something Went Wrong ...</div>;

    return (
        <>
            <BreadCrumb movieTitle={movie.original_title}/>
            <MovieInfo movie = {movie}/>
            <MovieInfoBar 
                time = {movie.runtime} 
                budget={movie.budget} 
                revenue ={movie.revenue} />

            <Grid header= 'Actors'>
                {
                    movie.actors.map(actor => (

                        <Actor
                            key = {actor.credit_id}
                            name = {actor.name}
                            character = {actor.character}
                            imageUrl={actor.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}` : NoImage}
                        />

                    ))
                }
            </Grid>

        </>
    );
};

export default Movie;