import React, { useEffect, useState } from "react";
import Card from "../Components/VideoPlayer";
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';


export default function Mainpage() {
  const [tags, setTags] = useState([]);
  const [search, setSearch] = useState("");
  const [foodCat, setFoodCat] = useState([]);
  const [videoData, setVideoData] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/display_filters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    setVideoData(response[0]);
    setFoodCat(response[1]);
    //console.log(response[0],response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div>
        {" "}
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          style={{ objectFit: "contain !important" }}
        >
          <div className="carousel-inner" id="carousel">
            <div className="carousel-caption" style={{ zIndex: "10" }}>
              <div className="d-flex justify-content-center">
              <TagsInput value={tags} onChange={(newTags) => setTags(newTags)} />
                <input type="search" placeholder="Search" className="searchbar"/><button placeholder="Submit" className="px-5 btn-style-two" onSubmit={(e) => {
                    setSearch(e.target.value);
                    tags=tags;
                  }}>Search</button>
                 {/* <input type="" className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                /> */}
              </div>
            </div>      
            
          </div>
          
        </div>
      </div>
      <div className="container">
              <div className="row mb-3">
                
                <hr />
                {videoData !== [] ? (
                  videoData
                    .map((filterItems) => {
                      return (
                        <div
                          key={filterItems.url}
                          className="col-12 col-md-6 col-lg-3 m-0.5"
                        >
                          <Card
                            foodItem={filterItems}
                          />
                        </div>
                      );
                    })
                ) : (
                  <div> Nothing found </div>
                )}
              </div>
            );
          )
        ) : (
          <div>**</div>
        )
      </div>
    </div>
  );
}