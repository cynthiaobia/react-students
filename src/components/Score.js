
function Score(props) {
  // const {date, score} = props.scores;
  console.log(props);
  const {date, score} = props;
  return (
    <h4>
      Score: {score} / Date: {date} 
    </h4>
  )
}

export default Score;