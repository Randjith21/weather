import React from 'react'
import moment from 'moment'


const Forecast = ({ forecast }) => (
    <div className="forecast" id="forecast">
        {forecast.list.map((item, i) => (
            <div key={i} className="block">
                <h3 className="secondary">{moment.unix(item.dt).format('ddd')}</h3>
                <h2 className="high">{Math.round(item.temp.max)}</h2>
                <h4 className="secondary">{Math.round(item.temp.min)}</h4>
            </div>
        ))}
    </div>
)

export default Forecast