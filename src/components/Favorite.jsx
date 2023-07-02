import { useContext } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { FavoriteContext } from '../context/FavoriteContext';
import Rating from './Rating';
import express from '../../expressjs.webp';
import { Link } from 'react-router-dom';

const Favorite = ({ show }) => {
  const [favorite] = useContext(FavoriteContext);

  return (
    <Offcanvas
      className="custom-container h-auto py-3 bg-default body-text"
      show={show}
      placement="bottom"
      backdrop={false}
      scroll={true}
    >
      <Offcanvas.Header className="p-0">
        <Offcanvas.Title className="fs-5 fw-bold">
          My Favorite Topics
        </Offcanvas.Title>
      </Offcanvas.Header>
      {favorite.favoriteTopics.length !== 0 ? (
        <div className="mt-2 d-flex gap-2 overflow-x-auto">
          {favorite.favoriteTopics.map((topic, i) => (
            <Link to={`details/${topic.topicId}`} key={topic.topicId || i}>
              <div
                className="rounded-1 overflow-hidden custom-shadow flex-shrink-0"
                style={{ width: '120px' }}
              >
                <img className="w-100" src={express} />
                <div className="p-2 ellipsis-one-line">
                  <span
                    className="body-text"
                    style={{ fontSize: '.9rem', fontWeight: '500' }}
                  >
                    {topic.topic}
                  </span>
                  <Rating rating={topic.rating} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="mt-2 fw-medium overflow-hidden">
          No items!, Add some to you favorite
        </div>
      )}
    </Offcanvas>
  );
};

export default Favorite;
