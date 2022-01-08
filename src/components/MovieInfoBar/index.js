
import React from "react";

// Helpers

import {calcTime,convertMoney} from '../../helpers';

// Styles

import { Wrapper,Content } from "./MovieInfoBar.style";

const MovieInfoBar = ({time,budget, revenue}) => (

    <Wrapper>
        <Content>

            {/* Run Time of the Movie */}

            <div className="column">
                <p>Running Time : {calcTime(time)}</p>
            </div>

            {/* Budget of the movie */}

            <div className="column">
                <p>Budget : {convertMoney(budget)}</p>
            </div>

            {/* Revenue of the movie */}

            <div className="column">
                <p>Revenue : {convertMoney(revenue)}</p>
            </div>

        </Content>
    </Wrapper>

);

export default MovieInfoBar;