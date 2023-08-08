
import Score from "./Score";

function Student (props) {

  console.log(props);
  
  const {name, bio, scores} = props.student;

  return (
    <div>
      <h1>Name: {name}</h1>
      <h2>Bio: {bio}</h2>
      <h2>Scores: </h2>

      {scores.map((score) => (
        <Score date={score.date} score={score.score} />
      ))}

    </div>

  )
};

export default Student;