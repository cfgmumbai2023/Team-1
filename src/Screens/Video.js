import React from "react";
import Search from "../Components/Search"
import VideoPlayer from "../Components/VideoPlayer";

export function Video(){
    return(
        <div>
            <Search />
            < VideoPlayer />
            <hr></hr>
            < VideoPlayer />
            <hr></hr>
            < VideoPlayer />
            <hr></hr>
            < VideoPlayer />
        </div>
    );
}