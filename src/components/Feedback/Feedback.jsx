import s from './Feedback.module.css';

const Feedback = ({ statistics, total, positiveFeedback }) => {
  //   console.log(statistics);
  return (
    <div>
      <ul>
        {statistics.map(([key, value]) => {
          return (
            <li className={s.listItem} key={key}>
              <p>
                {key}:{value}
              </p>
            </li>
          );
        })}
        <li className={s.listItem}>
          <p>total: {total}</p>
        </li>
        <li className={s.listItem}>
          {' '}
          <p>positive: {positiveFeedback}</p>{' '}
        </li>
      </ul>
    </div>
  );
};

export default Feedback;
