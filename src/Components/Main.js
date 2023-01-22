import { Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Spinner from "./Spinner";
import "../App.css";

export default function Main({ category, setProgress }) {
  const [myData, setData] = useState([]);
  const [loading, isLoading] = useState(false);

  const getApi = () => {
    setProgress(10);
    let url = "https://inshorts.deta.dev/news?category=" + category;
    isLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setProgress(30);
        setData(json.data);
        setProgress(70);
        isLoading(false);
        setProgress(100);
      });
    document.title =
      category === ""
        ? "Top News - React App"
        : `${
            category.substring(0, 1).toUpperCase() + category.substring(1)
          }  - React App`;
  };

  useEffect(() => {
    getApi();
    const interval = setInterval(() => {
      getApi();
    }, 500000);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, []);

  return (
    <div style={{backgroundColor: 'rgb(27 33 38)'}}>
      <div className="container" style={{ marginTop: "80px", backgroundColor: 'rgb(27 33 38)' }}>
        <div
          className="position-absolute"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {loading && <Spinner className=" " />}
        </div>
        <Row xs={1} md={3} className="g-4 px-4 py-4 text-light">
          {!loading &&
            myData.map((value) => {
              return (
                <Col className="container-fluid mt-4" key={value.id}>
                  <Card border="secondary" className="bg-dark">
                    <Card.Img
                      variant="top"
                      height="350px"
                      width="50%"
                      src={value.imageUrl}
                    />
                    <Card.Body>
                      <Card.Title style={{fontWeigth: 'bolder'}}>{value.title}</Card.Title>
                      <Card.Text>{value.content}</Card.Text>
                      <a
                        rel="noreferrer"
                        href={value.readMoreUrl}
                        target="_blank"
                      >
                        <Button variant="primary">Read More</Button>
                      </a>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">
                        By {value.author} on {value.date} {value.time}
                      </small>
                    </Card.Footer>
                  </Card>
                </Col>
              );
            })}
        </Row>
      </div>
    </div>
  );
}

Main.propTypes = {
  category: PropTypes.string,
};
