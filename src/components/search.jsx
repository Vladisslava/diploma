import React, {useState} from 'react';
import search from "assets/img/search.png";

export const Search = ({onSearch, onChange}) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        onSearch && onSearch(searchQuery)
    };

    return (
        <form className="wr-search" action="">
            <input
                type="text"
                placeholder="Поиск..."
                onChange={event => (setSearchQuery(event.target.value), onChange && onChange(event.target.value))}
                value={searchQuery}
            />
            <button type="submit" onClick={handleSubmit}>
                <img src={search} alt=""/>
            </button>
        </form>
    )
};