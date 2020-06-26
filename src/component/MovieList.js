import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Image, Button, Spinner } from "react-bootstrap";
import "./MovieList.css";

const MovieList = ({
  isLoaded,
  likeList,
  pagination,
  handlePrev,
  handleNext,
  addLike,
  addBlock,
  filterItems
}) => {
  return (
    <div>
      <div className="pagination">
        <h2>Top Rated Movie</h2>
        <Button
          variant="primary"
          disabled={pagination.prev}
          onClick={handlePrev}
        >
          prev
        </Button>
        <p>page {pagination.page}</p>
        <span style={{ display: isLoaded ? "none" : "inline-block" }}>
          <Spinner animation="border" size="sm" />
        </span>
        <Button
          variant="primary"
          disabled={pagination.next}
          onClick={handleNext}
        >
          next
        </Button>
      </div>
      <Row xs={1} md={4} lg={5} className="poster">
        {filterItems.map(item => (
          <Col className="shop-image" key={item.id}>
            <Image
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              alt={item.title}
              fluid
            />
            <hr />
            {likeList.find(like => like.id === item.id) ? (
              <div>
                <Button variant="danger" disabled>
                  Liked
                </Button>{" "}
                <Button variant="secondary" disabled>
                  Block
                </Button>{" "}
              </div>
            ) : (
              <div>
                <Button variant="danger" onClick={() => addLike(item)}>
                  Like
                </Button>{" "}
                <Button variant="secondary" onClick={() => addBlock(item)}>
                  Block
                </Button>{" "}
              </div>
            )}
            <p>{item.title}</p>
            <p>{item.release_date}</p>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MovieList;
