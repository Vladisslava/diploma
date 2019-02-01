import React from 'react';
import search from "assets/img/search.png";

export const Search = ({onChange}) => (
    <form className="wr-search" action="">
        <input type="text" placeholder="Поиск..." onChange={onChange}/>
        <button type="submit">
            <img src={search} alt=""/>
        </button>
    </form>
);