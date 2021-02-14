import React from 'react'

import Weather from './Weather'
import Forecast from './Forecast'

const Board = ({ weather, forecast, location }) => (
    <div className="panel">
        <h2 className="city" id="city">
            {location} {weather.sys && `, ${weather.sys.country}`}
        </h2>
        {weather.cod === 200 ?
            <>
                <Weather weather={weather} />
                <Forecast forecast={forecast} />
            </> :
            <p>{weather.message}</p>
        }
    </div>
)

export default Board