import { useHistory, useLocation } from "react-router-dom";
import Header from "../Header";
import "./index.css";

const GameResults = () => {
  const history = useHistory();
  const location = useLocation();
  const { Score, questions, selectedOptions } = location.state || {};

  console.log("GameResults - Received state:", {
    Score,
    questions,
    selectedOptions,
  });

  const handleGameReportClick = () => {
    console.log("GameResults - Navigating to GameReport with:", {
      questions,
      selectedOptions,
    });
    history.push("/gamereport", { questions, selectedOptions });
  };

  if (!questions || !selectedOptions) {
    return <div>No quiz data available. Please start a new quiz.</div>;
  }

  const total = questions.length;
  const Percentage = (Score / total) * 100;

  return (
    <>
      <Header />
      <div id="mein-container">
        <div id="report-container">
          {Percentage >= 60 ? (
            <div className="winning-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/quiz-game-congrats-trophy-img.png"
                alt="won"
                height="200"
                width="280"
              />
              <h1>Congrats</h1>
              <h1>{Percentage}% Correctly Answered</h1>
              <p className="fontgrey">Quiz completed successfully</p>
              <p className="fontgrey">
                You attempted {Score} out of {total} questions as correct
              </p>
              <button
                onClick={handleGameReportClick}
                type="button"
                style={{
                  display: "block",
                  padding: "10px 20px",
                  margin: "10px auto",
                  backgroundColor: "#007bff",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Report
              </button>
            </div>
          ) : (
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/quiz-game-lose-img.png"
                alt="lose"
                height="300"
                width="410"
              />
              <h1>You lose</h1>
              <h1 style={{ color: "#0EA5E9" }}>
                {Percentage}% Correctly Answered
              </h1>
              <p className="fontgrey2">
                You attempted {Score} out of {total} questions as correct
              </p>
              <button
                onClick={handleGameReportClick}
                type="button"
                style={{
                  display: "block",
                  padding: "10px 20px",
                  margin: "10px auto",
                  backgroundColor: "#007bff",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Report
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default GameResults;
