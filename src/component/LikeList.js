import React from "react";
 
import { Row, Col, Image } from "react-bootstrap";
import Details from "./Details.js";
const LikeList = props => {
  const { likeList, addBlock, setLikeList } = props;

  const delLike = item => {
    let arr = [...likeList];
    let idx = arr.indexOf(item);
    if (idx !== -1) {
      arr.splice(idx, 1);
      setLikeList(arr);
    }
  };

  const clickBlock = item => {
    addBlock(item);
    delLike(item);
  };

  return (
    <div>
      <h1>Like List</h1>
      <Row xs={1} md={4} lg={5} className="like-list">
        {likeList.map(item => (
          <Col key={item.id}>
            <Image
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              alt={item.title}
              fluid
            />
            <div>
              <span onClick={() => delLike(item)}>
                <img
                  src={"https://pic.pngsucai.com/00/18/69/47bae1a6a01fbb0d.jpg"}
                  width="10%"
                  height="10%"
                  alt="delete"
                />
              </span>
              <span onClick={() => clickBlock(item)}>
                <img
                  src={
                    "data:image/png;base64,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"
                  }
                  width="10%"
                  height="10%"
                  alt="block"
                />{" "}
              </span>
              <Details id={item.id} />
            </div>
            <p>{item.title}</p>
            <p>{item.release_date}</p>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default LikeList;
