const ResetButton = ({ resetBtn }) => {
  return (
    <li>
      <button
        onClick={() => {
          resetBtn();
        }}
      >
        Reset
      </button>
    </li>
  );
};

export default ResetButton;
