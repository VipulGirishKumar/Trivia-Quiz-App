import "./App.css";
import Quiz from "./components/Quiz.js";
import DropDown from "./components/DropDown";
import QuestionList from "./components/QuestionList";

function App() {
  return (
    <div>
      <div className="App">
        <h1>Hello World!</h1>
        <h1>Quiz!</h1>
      </div>
      <DropDown />
      <QuestionList />
      <Quiz />
    </div>
  );
}
export default App;
