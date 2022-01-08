import React, {useState, useEffect, useRef} from "react";

// Image of search icon

import searchIcon from '../../images/search-icon.svg';

import PropTypes from "prop-types";

// Styles 

import { Wrapper, Content } from "./SearchBar.styles";
import { func } from "prop-types";

const SearchBar = ({setSearchTerm }) => {

    const [state, setState] = useState('');

    // Gives a value that is mutable and doesnt cause a render
    const initial = useRef(true);

    useEffect( () => {

        // To skip the initial render
        if(initial.current)
        {
            initial.current = false;
            return;
        }

        // To create delay for user experience
        const timer = setTimeout(() => {
            setSearchTerm(state);
        },500)

        return () => clearTimeout(timer);

    },[setSearchTerm,state])

    return(

        <Wrapper>
            <Content>
                <img src={searchIcon} alt="search-icon"/>
                <input 
                    type="text" 
                    placeholder='Search Movie'
                    onChange= {event => setState(event.currentTarget.value)}
                    value={state}
                />
            </Content>
        </Wrapper>

    );
};

SearchBar.propTypes = {
    callback : PropTypes.func,
}

export default SearchBar;