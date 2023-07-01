const Rating = ({ rating = 0 }) => {
  const MAX_STARS = 5;
  const fullStar = Math.floor(rating);
  const halfStar = Math.ceil(rating - fullStar);
  let emptyStar = MAX_STARS - (fullStar + halfStar);

  const icons = [];

  for (let i = 0; i < fullStar; i++) {
    icons.push(
      <ion-icon key={icons.length} class="md hydrated" name="star"></ion-icon>
    );
  }

  if (halfStar)
    icons.push(
      <ion-icon
        key={icons}
        class="md hydrated"
        name="star-half-outline"
      ></ion-icon>
    );

  for (let i = 0; i < emptyStar; i++) {
    icons.push(
      <ion-icon
        key={icons.length}
        class="md hydrated"
        name="star-outline"
      ></ion-icon>
    );
  }

  return <div>{icons}</div>;
};

export default Rating;
