const Feedback = ({ statistics, total, positiveFeedback }) => {
  //   console.log(statistics);
  return (
    <div>
      <ul>
        {statistics.map(([key, value]) => {
          return (
            <li key={key}>
              {key}: {value}
            </li>
          );
        })}
        <li>total: {total}</li>
        <li>positive: {positiveFeedback}</li>
      </ul>
    </div>
  );
};

export default Feedback;
