import GridLayout from './GridLayout';
import CustomCard from './CustomCard';
import { Link } from 'react-router-dom';

const CardsSection = ({ topics }) => {
  return (
    <div className="mt-3">
      <h2 className="body-text mb-4 fs-5 fw-bold">
        &#34;<span>{topics.length}</span>&#34; Web Topics Found
      </h2>
      <GridLayout>
        {topics.map((topic) => (
          <Link key={topic.id} to={`details/${topic.id}`}>
            <CustomCard topic={topic} />
          </Link>
        ))}
      </GridLayout>
    </div>
  );
};

export default CardsSection;
