import { useState, useEffect, useRef, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { DNA } from "react-loader-spinner";
import Cookies from "js-cookie";
import Header from "../Header";
import "./index.css";

const QuizGame = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [Score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);
  const [quizEnded, setQuizEnded] = useState(false);
  const history = useHistory();
  const timerRef = useRef(null);

  const fetchQuestions = async () => {
    const jwtToken = Cookies.get("jwt_token");
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`,
      },
    };

    try {
      const response = await fetch(
        "https://apis.ccbp.in/assess/questions",
        options
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setQuestions(data.questions);
      setSelectedOptions(new Array(data.questions.length).fill(null));
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching questions:", error);
      setFetchError(error);
      setIsLoading(false);
    }
  };
  const handleNextQuestion = useCallback(() => {
    if (selectedOptions[currentQuestion] !== null || timeLeft === 0) {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setTimeLeft(15);
      } else {
        setQuizEnded(true);
      }
    }
  }, [currentQuestion, questions.length, selectedOptions, timeLeft]);

  const renderOptionIcon = (option) => {
    if (selectedOptions[currentQuestion] === null) {
      return null;
    }

    if (option.is_correct === "true") {
      return (
        <img
          src="https://assets.ccbp.in/frontend/react-js/quiz-game-check-circle-img.png"
          alt="correct checked circle"
          className="icon-ruler"
        />
      );
    }

    if (selectedOptions[currentQuestion] === option.text) {
      return (
        <img
          src="https://assets.ccbp.in/frontend/react-js/quiz-game-close-circle-img.png"
          alt="incorrect close circle"
          className="icon-ruler"
        />
      );
    }

    return null;
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  useEffect(() => {
    let interval = null;
    if (
      questions.length > 0 &&
      !selectedOptions[currentQuestion] &&
      !quizEnded
    ) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime === 0) {
            clearInterval(interval);
            handleNextQuestion();
            return 15;
          }
          return prevTime - 1;
        });
      }, 1000);

      timerRef.current = interval;
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [
    questions,
    currentQuestion,
    selectedOptions,
    quizEnded,
    handleNextQuestion,
  ]);

  const handleOptionClick = (selectedText) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[currentQuestion] = selectedText;
    setSelectedOptions(newSelectedOptions);

    const correctOption = questions[currentQuestion].options.find(
      (option) => option.is_correct === "true"
    );
    if (selectedText === correctOption.text) {
      setScore(Score + 1);
    }
  };

  const renderOptions = () => {
    const { options, options_type: OptionsType } = questions[currentQuestion];

    switch (OptionsType) {
      case "DEFAULT":
        return (
          <ul className="default-optionList">
            {options.map((option) => {
              let optionClass = "option-list-item";
              if (selectedOptions[currentQuestion] !== null) {
                if (option.is_correct === "true") {
                  optionClass += " correct-answer";
                } else if (selectedOptions[currentQuestion] === option.text) {
                  optionClass += " incorrect-answer";
                }
              }
              return (
                <div className="optional-row" key={option.id}>
                  <li
                    className={optionClass}
                    onClick={() =>
                      selectedOptions[currentQuestion] === null &&
                      handleOptionClick(option.text)
                    }
                    style={{
                      pointerEvents:
                        selectedOptions[currentQuestion] !== null
                          ? "none"
                          : "auto",
                    }}
                  >
                    <span className="option-text">{option.text}</span>
                  </li>
                  <div className="icon-container">
                    {renderOptionIcon(option)}
                  </div>
                </div>
              );
            })}
          </ul>
        );
      case "IMAGE":
        return (
          <ul className="default-image-list">
            {options.map((option) => (
              <div className="image-optional-row" key={option.id}>
                <li
                  id="image-list-item"
                  aria-label={option.text}
                  onClick={() =>
                    selectedOptions[currentQuestion] === null &&
                    handleOptionClick(option.text)
                  }
                  style={{
                    pointerEvents:
                      selectedOptions[currentQuestion] !== null
                        ? "none"
                        : "auto",
                  }}
                >
                  <img
                    src={option.image_url}
                    alt={option.text}
                    className="option-img"
                  />
                  {renderOptionIcon(option)}
                </li>
              </div>
            ))}
          </ul>
        );

      case "SINGLE_SELECT":
        return (
          <ul className="single-optionList">
            {options.map((option) => (
              <li className="single-list-item" key={option.id}>
                <label className="probono">
                  <input
                    type="radio"
                    name="option"
                    value={option.text}
                    onChange={() => handleOptionClick(option.text)}
                    disabled={selectedOptions[currentQuestion] !== null}
                  />
                  {option.text}
                  {renderOptionIcon(option)}
                </label>
              </li>
            ))}
          </ul>
        );
      default:
        return <p>Unsupported question type</p>;
    }
  };

  if (isLoading) {
    return (
      <div className="loader-container">
        render( render(
        <DNA
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
        ) )
      </div>
    );
  }

  if (fetchError) {
    return (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-assess-failure-img.png"
          alt="failure view"
        />
        <h1>Something went wrong</h1>
        <p>Our servers are busy please try again</p>
        <button type="button" onClick={fetchQuestions}>
          Retry
        </button>
      </div>
    );
  }

  if (quizEnded) {
    history.push("/gameresults", { Score, questions, selectedOptions });
    return null;
  }

  return (
    <div>
      <Header />
      <div id="quiz-game-container">
        <div id="quizyy-container">
          <div className="sub-container">
            <p className="question-count">
              Question <br />
              <span id="timex">
                {`${currentQuestion + 1}/${questions.length}`}
              </span>
            </p>
            <p className="timer">{timeLeft}</p>
          </div>
          <div className="quiz-options-layout">
            <p className="question">
              {questions[currentQuestion].question_text}
            </p>
            {renderOptions()}
          </div>
          <div className="buttonsi-container">
            {currentQuestion < questions.length - 1 ? (
              <button
                type="button"
                onClick={handleNextQuestion}
                className="next-button"
                disabled={
                  selectedOptions[currentQuestion] === null && timeLeft > 0
                }
              >
                Next Question
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setQuizEnded(true)}
                className="submit-button"
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizGame;
