import { Component } from "react";
import { Redirect } from "react-router-dom";
import Cookies from "js-cookie";
import { DNA } from "react-loader-spinner";
import Header from "../Header";
import rawData from "../Modify/index"; // Import the rawData
import "./index.css";

class Home extends Component {
  state = {
    jwtToken: Cookies.get("jwt_token"),
    questions: [],
    isFetching: false,
    shouldRedirect: false,
  };

  handleStartQuiz = () => {
    this.setState({ isFetching: true });
    // Simulate API fetch delay
    setTimeout(() => {
      this.setState({
        questions: rawData,
        isFetching: false,
        shouldRedirect: true,
      });
    }, 1000);
  };

  render() {
    const { jwtToken, isFetching, shouldRedirect, questions } = this.state;

    if (jwtToken === undefined) {
      return <Redirect to="/login" />;
    }

    return (
      <div>
        <Header />
        {isFetching ? (
          <div className="loader-container" data-testid="loader">
            <DNA
              visible={true}
              height="80"
              width="80"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
            />
          </div>
        ) : (
          <div id="home-container">
            <div id="home-content">
              <img
                src="https://assets.ccbp.in/frontend/react-js/quiz-game-start-the-quiz-img.png"
                alt="start quiz game"
                className="home-img"
              />
              <h1 className="home-heading">
                How Many Of These Questions Do You Actually Know
              </h1>
              <p className="home-description">
                Test yourself with these easy quiz questions and answers
              </p>
              <button
                type="button"
                className="start-quiz-button"
                onClick={this.handleStartQuiz}
              >
                Start Quiz
              </button>
              <div className="warning">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/quiz-game-error-img.png"
                  className="warning-icon"
                  alt="warning icon"
                />
                <p className="text">
                  All the progress will be lost, if you reload during the quiz
                </p>
              </div>
            </div>
          </div>
        )}
        {shouldRedirect && (
          <Redirect to={{ pathname: "/quizgame", state: { questions } }}>
            {/* Passing questions array as props to /quizgame */}
          </Redirect>
        )}
      </div>
    );
  }
}

export default Home;
