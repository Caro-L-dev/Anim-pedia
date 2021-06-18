import React from 'react';

function SearchBar ({ handleInput, search }) {
    return (
       <section className="searchbox-wrap">
           <input 
                type="text" 
                placeholder="Search for an anime..." 
                className="searchbox" 
                onChange={handleInput} 
                onKeyPress={search}
            />
       </section>
    )
}

export default SearchBar;