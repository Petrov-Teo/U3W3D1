import React from "react";
import { useSelector } from "react-redux";
import { Container, ListGroup, ListGroupItem } from "react-bootstrap";

const FavoriteCompaniesList = () => {
  const favoriteCompanies = useSelector((state) => state.main.favoriteCompany);

  return (
    <Container>
      <h2 className="display-3 text-center mt-5">FAVORITE COMPANIES</h2>
      <ListGroup>
        {favoriteCompanies.map((company, index) => (
          <ListGroupItem key={index} className="mb-2">
            {company}
          </ListGroupItem>
        ))}
      </ListGroup>
    </Container>
  );
};

export default FavoriteCompaniesList;
