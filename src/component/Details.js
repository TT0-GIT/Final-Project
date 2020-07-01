import React, { useState } from "react";
 
import { Modal, Card, Container, Row, Col } from "react-bootstrap";
export default function Details(props) {
  const { id } = props;
  const apikey = `82f403f0b5eff96063eaa0a41372b443`;
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}&language=en-US`;
  const [show, setShow] = useState(false);
  const [content, setContent] = useState({});
  const [production, setPro] = useState([]);

  const fetchDetails = async () => {
    let data = await fetch(url);
    let post = await data.json();
    setContent(post);
    setPro(post.production_companies);
  };

  const handleShow = () => {
    fetchDetails();
    setShow(!show);
  };
  let Background = `https://image.tmdb.org/t/p/w500${content.poster_path}`;
  let style = {
    opacity: "0.5",
    width: "100%",
    height: "100%",
    backgroundImage: `url(${Background})`
  };

  return (
    <span>
      <img
        onClick={handleShow}
        src={
          "data:image/jpeg;base64,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"
        }
        width="10%"
        height="10%"
        alt="details"
      />
      <Modal show={show} size="lg" onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {`Title: ${content.title}   `} <br />
            {`  Release Date: ${content.release_date}`}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={style}>
          <Container>
            <Row>
              <Col xs={10} md={7}>
                <Card>
                  <Card.Body>
                    <Card.Title>Overview</Card.Title>
                    <Card.Text>{content.overview}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={8} md={5}>
                <Card>
                  <Card.Title>Production:</Card.Title>
                  <Card.Body>
                    {production.map(item => {
                      let p =
                        item.logo_path !== null ? (
                          <Card.Img key={item.id}
                            variant="top"
                            src={`https://image.tmdb.org/t/p/w500${
                              item.logo_path
                            }`}
                          />
                        ) : (
                          <span key={item.id}>{item.name}</span>
                        );
                      return p;
                    })}
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </span>
  );
}
