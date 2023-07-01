import axios from 'axios';

// Which is better to create axios instance or to add the baseURL to the .env and call it back
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    Accept: 'application/json',
  },
});

export const fetchTopics = async (phrase = '') => {
  try {
    const url = `/topics/list?phrase=${phrase}`;
    const { data } = await axiosInstance.get(url);
    return data;
  } catch (error) {
    throw new Error('Opss, Something goes wrong fetching the data!');
  }
};

export const fetchTopic = async (topicId) => {
  try {
    const url = `topics/details/${topicId}`;
    const { data } = await axiosInstance.get(url);
    return data;
  } catch (error) {
    throw new Error('Opss, The topic you are looking for not exist!');
  }
};
