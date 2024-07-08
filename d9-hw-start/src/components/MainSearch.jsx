import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Job from "./Job";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const MainSearch = () => {
  const count = useSelector((state) => state.main.count);
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const [jobs, setJobs] = useState([]);

  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        setJobs(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <Link
            className="display-6 link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            to="/favoriteCompany"
          >
            Favorite Companies
          </Link>
        </Col>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press Enter" />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
          <div className="d-none">
            <p className="mt-3">il valore di count è {count}</p>
            <Button onClick={() => dispatch({ type: "INCREMENT", payload: 2 })}>incrementa</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
