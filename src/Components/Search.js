import React, { useState } from "react";

import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';


export default function SearchBar() {

  const [tags, setTags] = useState([]);

  return (
    <div style={{ backgroundColor: "#000000" }}>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <TagsInput

                value={tags} onChange={(newTags) => setTags(newTags)}

                
              />
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
