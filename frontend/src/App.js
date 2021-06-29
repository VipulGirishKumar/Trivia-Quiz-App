import "./App.css";
import Quiz from "./components/Quiz.js";
import DropDown from "./components/DropDown";

function App() {
  return (
    <div>
      <div className="App">
        <h1>Hello World!</h1>
        <h1>Quiz!</h1>
      </div>
      <DropDown />
      <Quiz />
    </div>
  );
}
export default App;
