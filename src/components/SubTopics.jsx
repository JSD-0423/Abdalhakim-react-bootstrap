const SubTopics = ({ topic }) => {
  return (
    <div className="bg-default body-text w-60 rounded-1">
      <h2 className="fs-4 fw-bold px-4 py-3">{topic.topic} Sub Topics</h2>
      <ul className="ps-0">
        {topic.subtopics.map((subTopic) => (
          <li
            key={subTopic}
            className="custom-border-top px-4 d-flex align-items-center py-3"
          >
            <ion-icon
              class="fs-4 secondary-color me-3 flex-shrink-0 hydrated"
              name="checkmark-circle-outline"
            ></ion-icon>
            <span className="ellipsis-one-line">{subTopic}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubTopics;
