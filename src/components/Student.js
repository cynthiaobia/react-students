
import Score from "./Score";

function Student (props) {

  console.log(props);
  
  const {name, bio, scores} = props.student;

  return (
    <div>
      <h2>{name}</h2>
      <p>{bio}</p>
      <h3>Scores</h3>

      {scores.map((score) => (
        <Score date={score.date} score={score.score} />
      ))}

    </div>

  )
};

export default Student;