import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
export default function AllMovie(props) {
  let { allItems, allIts } = props;
  return (
    <div>
      {allIts.map(function(it) {
        return (
          <div key={it.id}>
            <Card style={{ width: "75%", display: "absolute", left: "10%" }}>
              <Card.Img
                variant="top"
                src={`https://image.tmdb.org/t/p/w200${it.backdrop_path}`}
              />
              <Card.Body>
                <Card.Title>{it.original_title}</Card.Title>
                <Card.Text>{it.overview}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
  /**
 * <Card style={{ width: '60%' }}>
  <Card.Img variant="top" {`https://image.tmdb.org/t/p/w200${it.backdrop_path}`} />
  <Card.Body>
    <Card.Title>{it.original_title}</Card.Title>
    <Card.Text>
     {it.overview}
    </Card.Text>  
  </Card.Body>
</Card>
 */
}
