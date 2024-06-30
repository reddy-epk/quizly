import { useLocation } from "react-router-dom";
import Header from "../Header";
import "./index.css";

const GameReport = () => {
  const location = useLocation();
  const { questions, selectedOptions } = location.state || {};

  if (
    !questions ||
    !selectedOptions ||
    !Array.isArray(questions) ||
    !Array.isArray(selectedOptions)
  ) {
    return <div>No data available. Please start a new quiz.</div>;
  }

  const totalQuestions = questions.length;
  const answeredQuestions = selectedOptions.filter(Boolean).length;
  const unattempted = totalQuestions - answeredQuestions;
  const correctAnswers = selectedOptions.filter(
    (option, index) =>
      option &&
      questions[index].options.find((opt) => opt.text === option).is_correct ===
        "true"
  ).length;
  const incorrectAnswers = answeredQuestions - correctAnswers;

  const renderOptions = (question) => {
    switch (question.options_type) {
      case "DEFAULT":
      case "SINGLE_SELECT":
        return (
          <ul className="single-optionList">
            {question.options.map((option) => (
              <li className="single-list-item" key={option.id}>
                <div className="probono">
                  {option.text}
                  {option.is_correct === "true" && (
                    <img
                      className="report-correct-icon"
                      src="https://assets.ccbp.in/frontend/react-js/quiz-game-check-circle-img.png"
                      alt="correct"
                    />
                  )}
                </div>
              </li>
            ))}
          </ul>
        );
      case "IMAGE":
        return (
          <ul className="default-image-list">
            {question.options.map((option) => (
              <div className="image-optional-row" key={option.id}>
                <li key={option.id} id="image-list-item">
                  <img
                    src={option.image_url}
                    alt={option.text}
                    className="option-img"
                  />
                  {option.is_correct === "true" && (
                    <img
                      className="report-correct-icon"
                      src="https://assets.ccbp.in/frontend/react-js/quiz-game-check-circle-img.png"
                      alt="correct"
                    />
                  )}
                </li>
              </div>
            ))}
          </ul>
        );
      default:
        return <p>Unsupported question type</p>;
    }
  };

  return (
    <>
      <Header />
      <div className="game-report-container">
        <div className="card-container">
          <h2>Quiz Summary</h2>
          <div className="report-summary">
            <div className="score-container">
              <p className="sco">
                {answeredQuestions}/{totalQuestions}
              </p>
            </div>
            <div>
              <div className="container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/quiz-game-right-check-img.png"
                  alt="correct answer icon"
                  className="image"
                />
                <p>{correctAnswers} Correct answers</p>
              </div>
              <div className="container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/quiz-game-wrong-check-img.png"
                  alt=" incorrect answer icon"
                  className="image"
                />
                <p>{incorrectAnswers} Incorrect answers</p>
              </div>
              <div className="container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/quiz-game-un-answered-img.png "
                  alt="unattempted icon"
                  className="image"
                />
                <p>{unattempted} Unattempted answers</p>
              </div>
            </div>
          </div>
          {unattempted > 0 ? (
            <div className="unattempted-questions">
              <h2>Unattempted Questions</h2>
              <div className="questions-scroll-container">
                <ul className="report-questions-list">
                  {questions.map((question, index) => {
                    if (!selectedOptions[index]) {
                      return (
                        <li key={question.id} className="report-question-item">
                          <p className="report-question-text">
                            {question.question_text}
                          </p>
                          {renderOptions(question)}
                        </li>
                      );
                    }
                    return null;
                  })}
                </ul>
              </div>
            </div>
          ) : (
            <div id="no-nomoar">
              <p className="attempted-para">Attempted All The questions</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default GameReport;
