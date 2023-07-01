import { Form, InputGroup } from 'react-bootstrap';

const ActionsSection = ({
  handleSearchChange,
  handleSortChange,
  handleFilterChange,
  categories,
}) => {
  return (
    <InputGroup className="custom-shadow rounded">
      <Form.Control
        onChange={(e) => handleSearchChange(e.target.value)}
        style={{ flexGrow: '4', paddingBlock: '0.5rem' }}
        placeholder="Search Topic"
        aria-label="Search topic by typing the name"
      />
      <Form.Select
        onChange={(e) => handleSortChange(e.target.value)}
        className="custom-border-left"
        style={{ width: '1rem !important' }}
        aria-label="Sort topics by author name and topic title"
      >
        <option value="default">Default</option>
        <option value="topic">Topic Title</option>
        <option value="name">Author Name</option>
      </Form.Select>
      <Form.Select
        onChange={(e) => handleFilterChange(e.target.value)}
        className="custom-border-left custom-border-right"
        aria-label="Filter topics by category"
      >
        <option value="default">Default</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </Form.Select>
    </InputGroup>
  );
};

export default ActionsSection;
