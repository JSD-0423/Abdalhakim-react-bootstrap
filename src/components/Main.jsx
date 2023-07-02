import { useEffect, useState } from 'react';
import ActionsSection from './ActionsSection';
import { fetchTopics } from '../api/api';
import { useDebounce } from '../customHooks/useDebounce';
import CardsSection from './CardsSection';
import Spinner from './Spinner';
import ErrorMessage from './ErrorMessage';

const Main = () => {
  const [topics, setTopics] = useState([]);
  const [sortedAndFilterdTopics, setSortedAndFilterdTopics] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState();

  const [search, setSearch] = useState('');
  const debounce = useDebounce(search, 300);
  const [sort, setSort] = useState('default');
  const [filter, setFilter] = useState('default');

  useEffect(() => {
    const getAllTopics = async () => {
      try {
        const data = await fetchTopics(debounce);
        setTopics(data);
        const filter = Array.from(new Set(data.map((topic) => topic.category)));
        setCategories(filter);
      } catch (error) {
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getAllTopics();
  }, [debounce]);

  useEffect(() => {
    let topicsInstance = [...topics];

    if (filter !== 'default') {
      topicsInstance = topicsInstance.filter(
        (topic) => topic.category === filter
      );
    }

    if (sort === 'topic') {
      topicsInstance = topicsInstance.sort((a, b) =>
        a.topic.localeCompare(b.topic)
      );
    } else if (sort === 'name') {
      topicsInstance = topicsInstance.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    }

    setSortedAndFilterdTopics(topicsInstance);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, sort]);

  const handleSearchChange = (value) => {
    setSearch(value);
  };

  const handleSortChange = (value) => {
    setSort(value);
  };

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  if (isError) return <ErrorMessage message={isError} />;

  return (
    <div className="custom-container custom-bg-body py-3 pb-5">
      <ActionsSection
        handleSearchChange={handleSearchChange}
        handleSortChange={handleSortChange}
        handleFilterChange={handleFilterChange}
        categories={categories}
      />
      {!isLoading ? (
        <CardsSection
          topics={
            sort !== 'default' || filter !== 'default'
              ? sortedAndFilterdTopics
              : topics
          }
        />
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Main;
