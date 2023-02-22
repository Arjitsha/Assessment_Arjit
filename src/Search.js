
import React from "react";
import data from "./Col";
import Cards from "./Card";

import { useState } from "react";
export default function Search(){
    const [search,setSearch]=useState("");

    function onSearch(e)
    {
        setSearch(e.target.value)
        const newData=data.filter(data=>data.name.includes(e.target.value));
        return(<div>
            {newData}
        </div>)
          
        }
        


    
 return (
    <div className="wrapper">
        <div className="search-wrapper">
            <label htmlFor="search-form">
                <input
                    type="search"
                    name="search-form"
                    id="search-form"
                    className="search-input"
                    placeholder="Search for College..."
                    value={search}
                    /*
                    // set the value of our useState q
                    //  anytime the user types in the search box
                    */
                    onChange={onSearch}
                    ></input>
                    </label>
                    </div>
                    </div>
                
                )
                }