import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import QuizGame from "./components/QuizGame";
import GameResults from "./components/GameResults";
import GameReport from "./components/GameReport";
import NotFound from "./components/NotFound";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/quizgame" component={QuizGame} />
      <Route exact path="/gameresults" component={GameResults} />
      <Route exact path="/gamereport" component={GameReport} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default App;
