import React from "react";

export default function Card(props) {
  if (!props.foodItem) {
    return <div>Loading...</div>; // or any other fallback component or message
  }

  return (
    <div>
      <div>
        <div className="row">
          <div className="col-md-4 mx-2 p-2">
            <iframe
              style={{ width: "auto", height: "auto" }}
              src={props.foodItem.url}
              title="NA"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <div className="card-body">
              <h5 className="card-title">{props.foodItem.name}</h5>
              <h6 className="card-options">{props.foodItem.tags}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
