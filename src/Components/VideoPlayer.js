import React , {useState}from 'react';
import ReactPlayer from "react-player";
 
function VideoPlayer() {
  const [search, setSearch] = useState("");
  return (
    
    <div className="App" style={{paddingLeft:"250px", paddingTop: "50px", paddingBottom: "50px", backgroundColor:''}}>
      <div style={{ display: "flex", alignItems: "center" }}>
  <ReactPlayer
    width="30%"
    height="250px"
    url="https://www.youtube.com/watch?v=pqnhlrlrfmw"
  />
  <div style={{padding:"5%"}}>
  <button class="btn btn-dark" type="submit" style={{margin:"20px"}}>Title of the video</button>
  <div>
  <input class="btn btn-dark" type="button" style={{margin:"20px"}} value="Input"/>
<input class="btn btn-dark" type="button" style={{margin:"20px"}} value="Input"/>
<input class="btn btn-dark" type="submit" style={{margin:"20px"}} value="Submit"/>
<input class="btn btn-dark" type="reset" style={{margin:"20px"}} value="Reset"></input>
  </div>
  </div>
</div>
    </div>
  );
}
 
export default VideoPlayer;




