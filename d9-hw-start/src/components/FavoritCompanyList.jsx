import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { RemoveFavoriteAction } from "../redux/actions";

const FavoriteCompaniesList = () => {
  const favoriteCompanies = useSelector((state) => state.main.favoriteCompany);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Container>
      <Row>
        <Button
          className="btn btn-info"
          onClick={() => {
            navigate("/");
          }}
        >
          HOME
        </Button>
      </Row>
      <h2 className="display-3 text-center mt-5">FAVORITE COMPANIES</h2>
      <ListGroup>
        {favoriteCompanies.map((company, index) => (
          <ListGroupItem key={index} className="mb-2 d-flex justify-content-between align-items-center">
            <Link to={`/${company.url}`}>{company.company_name}</Link>
            <Button
              variant="danger"
              onClick={() => {
                dispatch(RemoveFavoriteAction(company._id));
              }}
            >
              REMOVE
            </Button>
          </ListGroupItem>
        ))}
      </ListGroup>
    </Container>
  );
};

export default FavoriteCompaniesList;
