import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Dropdown, Button } from 'react-bootstrap';

const SearchResults = () => {
  const { query } = useParams();
  const searchItem = query || 'Search Item';
  const stockAvailable = true; 
  const location = 'A1 Rack No.3'; 
  const categories = ['Groceries', 'Electronics', 'Clothes']; 
  const reviews = [
    { reviewer: 'John Doe', comment: 'Great product!' },
    { reviewer: 'Jane Smith', comment: 'Satisfactory performance.' }
  ];
  const relatedProducts = [
    { id: 1, name: 'Related Product 1', image: 'https://via.placeholder.com/300' },
    { id: 2, name: 'Related Product 2', image: 'https://via.placeholder.com/300' }
  ];

  return (
    <Container fluid className="d-flex flex-column align-items-center my-4">
      <h2>Selected Item: {searchItem}</h2>
      <p><strong>Location:</strong> {location}</p>
      <p><strong>Stock:</strong> {stockAvailable ? 'Stock is present' : 'Not currently available'}</p>
      {!stockAvailable && (
        <p>Available in 4 days. <Button variant="primary">Order Now</Button></p>
      )}
      <Dropdown className="my-4">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Categories
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {categories.map((category, index) => (
            <Dropdown.Item key={index}>{category}</Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      <h4>Reviews:</h4>
      {reviews.map((review, index) => (
        <p key={index}><strong>{review.reviewer}:</strong> {review.comment}</p>
      ))}
      <h4>Related Products:</h4>
      <Row className="justify-content-center">
        {relatedProducts.map(product => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="mb-4 d-flex justify-content-center">
            <Card className="text-center">
            <Card.Img variant="top" src={product.image} className="related-product-img" />
            <Card.Title className="related-product-title">{product.name}</Card.Title>

            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SearchResults;
