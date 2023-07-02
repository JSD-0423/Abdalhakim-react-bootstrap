import { useParams } from 'react-router-dom';
import {
  DetailsSection,
  ErrorMessage,
  Spinner,
  SubTopics,
} from '../../components';
import { useEffect, useState } from 'react';
import { fetchTopic } from '../../api/api';

const Details = () => {
  const { id } = useParams();
  const [topic, setTopic] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    const getTopic = async () => {
      try {
        const topic = await fetchTopic(Number(id));
        setTopic(topic);
      } catch (error) {
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getTopic();
  }, [id]);

  if (isLoading) return <Spinner />;

  if (isError) return <ErrorMessage message={isError} />;

  return (
    <main>
      <section
        className="h-auto w-100 custom-px text-white py-4"
        style={{ backgroundColor: '#333' }}
      >
        <DetailsSection topic={topic} />
      </section>
      <section className="h-auto w-100 custom-px mt-4">
        <SubTopics topic={topic} />
      </section>
    </main>
  );
};

export default Details;
