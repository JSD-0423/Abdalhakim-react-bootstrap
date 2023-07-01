import { createContext, useEffect, useMemo, useState } from 'react';

const FavoriteContext = createContext();

const getFavoriteTopics = () => {
  return (
    JSON.parse(localStorage.getItem('favorite')) || {
      show: true,
      favoriteTopics: [],
    }
  );
};

const createFavorite = (favorite) => {
  return {
    show: favorite?.show,
    favoriteTopics: favorite?.favoriteTopics,
  };
};

const FavoriteProvider = ({ children }) => {
  const [favorite, setFavorite] = useState(getFavoriteTopics());

  const newFavorite = useMemo(
    () => createFavorite(favorite),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [favorite?.show, favorite?.favoriteTopics]
  );

  const toggleFavorite = () => {
    setFavorite((prevValue) => {
      const newValue = { ...prevValue, show: !prevValue.show };
      localStorage.setItem('favorite', JSON.stringify(newValue));
      return newValue;
    });
  };

  // Add and Delete function
  const addTopicToFavorite = (topic) => {
    const newTopic = { ...topic, isAdded: true };
    setFavorite((prevValue) => {
      const newValue = {
        ...prevValue,
        favoriteTopics: [...prevValue.favoriteTopics, newTopic],
      };
      localStorage.setItem('favorite', JSON.stringify(newValue));
      return newValue;
    });
  };

  const removeTopicFromFavorite = (topicId) => {
    const newFavorites = favorite.favoriteTopics.filter(
      (fav) => fav.topicId !== topicId
    );

    setFavorite((prevValue) => {
      const newValue = {
        ...prevValue,
        favoriteTopics: newFavorites,
      };
      localStorage.setItem('favorite', JSON.stringify(newValue));
      return newValue;
    });
  };

  useEffect(() => {
    localStorage.setItem('favorite', JSON.stringify(favorite));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newFavorite]);

  const value = useMemo(() => {
    return [
      favorite,
      toggleFavorite,
      addTopicToFavorite,
      removeTopicFromFavorite,
    ];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favorite.show, favorite.favoriteTopics.length]);

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
};

export { FavoriteContext, FavoriteProvider };
