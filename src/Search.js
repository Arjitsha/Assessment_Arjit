
import React from "react";
import { useState } from "react";
export default function Search(){
    const [search,setSearch]=useState("");
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
                    onChange={(e) => setSearch(e.target.value)}
                    ></input>
                    </label>
                    </div>
                    </div>
                
                )
                }