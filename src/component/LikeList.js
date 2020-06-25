import React from 'react';
import { Row,Col,Image } from 'react-bootstrap';

const LikeList = ({ likeList }) => {
    return (
        <div>
            <h1>Like List</h1>
            <Row xs={1} md={4} lg={5} className="like-list">
                {likeList.map(item =>
                    <Col key={item.id}>
                        <Image src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                            alt={item.title} fluid
                        />
                        <p>{item.title}</p>
                        <p>{item.release_date}</p>
                    </Col>
                )}
            </Row>
        </div>
    )
}

export default LikeList;