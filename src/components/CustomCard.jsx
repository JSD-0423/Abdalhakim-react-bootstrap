import { Card } from 'react-bootstrap';
import express from '../../expressjs.webp';
import Rating from './Rating';

const CustomCard = ({ topic }) => {
  return (
    <Card className="border-0 custom-shadow">
      <Card.Img
        variant="top"
        className="w-100"
        style={{ height: '100%' }}
        src={express}
      />
      <Card.Body className="bg-default body-text">
        <Card.Text
          className="ellipsis-one-line"
          style={{ fontSize: '0.79rem' }}
        >
          {topic.category}
        </Card.Text>
        <Card.Title
          className="fw-bold ellipsis-2-lines mb-3"
          style={{ fontSize: '0.79rem' }}
        >
          {topic.topic}
        </Card.Title>
        <div className="d-flex mb-1">
          <Rating rating={topic.rating} />
        </div>
        <p
          className="opacity-75 ellipsis-one-line"
          style={{ fontSize: '0.9rem' }}
        >
          Author: {topic.name}
        </p>
      </Card.Body>
    </Card>
  );
};

export default CustomCard;
