import React , {useState} from "react";
export default function SearchBar(){
 
    return(
        <div style={{backgroundColor:'#000000'}}>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
     <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <input type="string" class="form-control" id="exampleInputLanguage"  placeholder="Language" aria-describedby="emailHelp" style={{marginRight:"20px"}} />
        <input type="string" class="form-control" id="exampleInputStandard"  placeholder="Standard" aria-describedby="emailHelp" style={{marginRight:"20px"}}/>
        <input type="string" class="form-control" id="exampleInputSubject"  placeholder="Subject" aria-describedby="emailHelp" style={{marginRight:"20px"}}/>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        
      </form>
    </div>
  </div>
</nav>
        </div>
    )
}