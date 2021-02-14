import React from 'react'

const Searchform = ({ handleSubmit, location }) => (
    <form onSubmit={handleSubmit}>
        <input
            type="text" 
            className="searchbar transparent"
            id="search"
            placeholder={location ? location : 'enter city, country'}
            name="location"
        />
        <input className="button" id="button" type="submit" value="Go" />
    </form>
)

export default Searchform