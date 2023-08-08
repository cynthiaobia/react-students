
function Score(props) {
  // const {date, score} = props.scores;
  console.log(props);
  const {date, score} = props;
  return (
    <h3>
    Date: {date} Score: {score}
    </h3>
  )
}

export default Score;