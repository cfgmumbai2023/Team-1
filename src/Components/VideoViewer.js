import React from "react";
import ReactPlayer from "react-player";
import "../Css/VideoViewer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

const VideoViewer = () => {
  return (
    <>
      <div className="container">
        <div>
          <div className="row my-3">
            <div className="col-12">
              <ReactPlayer url="https://www.youtube.com/watch?v=pqnhlrlrfmw" />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h3 className="text-center">VideoName</h3>
            </div>

            <div className="col-3">10 views</div>
            <div className="col-7"></div>
            <div className="col-1">
              <button className="icon-button">
                <FontAwesomeIcon icon={faThumbsUp} />
              </button>
            </div>
            <div className="col-1">
              <button className="icon-button">
                <FontAwesomeIcon icon={faThumbsDown} />
              </button>
            </div>
          </div>
          <div className="container">
          <div className="row">
          <div className="col-6">
              <button className="btn btn-dark">
                PPT Link
              </button>
            </div>
            <div className="col-6">
              <button className="btn btn-dark">
                WorkBook
              </button>
            </div>
          </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default VideoViewer;
