import Rating from './Rating';
import express from '../../expressjs.webp';
import CustomButton from './CustomButton';
import { useContext } from 'react';
import { FavoriteContext } from '../context/FavoriteContext';

const DetailsSection = ({ topic }) => {
  const [favorite, , addTopicToFavorite, removeTopicFromFavorite] =
    useContext(FavoriteContext);

  const isAdded =
    favorite.favoriteTopics.filter((fav) => +fav.topicId === topic.id)
      .length === 1;

  return (
    <main className="position-relative">
      <section className="w-60">
        <p className="fw-bold pre-title secondary-color">{topic.category}</p>
        <h1 className="fs-5 fw-bold">{topic.topic}</h1>
        <div className="d-flex mb-1">
          <Rating rating={topic.rating} />
        </div>
        <p className="description">{topic.description}</p>
      </section>
      <section
        style={{ width: '18rem', padding: '1px' }}
        className="top-0 end-0 card position-absolute rounded-0 border-0"
      >
        <img src={express} className="w-100" />
        <div className="p-3">
          <div>
            <h3 className="fs-6 fw-bold d-inline">{topic.topic}</h3> by{' '}
            <span
              className="text-decoration-underline"
              style={{ fontSize: '.8rem', color: '#00f' }}
            >
              {topic.name}
            </span>
          </div>
          <div className="text-black custom-border p-3 mt-1">
            <p className="reaction-question">Interested about this topic?</p>
            <CustomButton
              BtnStyle={`my-2 w-100 rounded-0 fs-6 secondary-bg border-0 ${
                isAdded ? 'd-none' : 'd-flex'
              } justify-content-center align-items-center`}
              text="Add to Favourites"
              iconStyle={`order-1 hydrated ps-3 fs-5`}
              iconName={`heart-outline`}
              onClick={() =>
                addTopicToFavorite({
                  topicId: topic.id,
                  image: topic.image,
                  topic: topic.topic,
                  rating: topic.rating,
                })
              }
            />
            <CustomButton
              BtnStyle={`my-2 w-100 rounded-0 fs-6 secondary-bg border-0 ${
                isAdded ? 'd-flex' : 'd-none'
              } justify-content-center align-items-center`}
              text="Delete from Favourites"
              iconStyle={`order-1 hydrated ps-1 fs-6`}
              iconName={`trash-outline`}
              onClick={() => removeTopicFromFavorite(topic.id)}
            />
            <p className="credits">Unlimited Credits</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DetailsSection;
