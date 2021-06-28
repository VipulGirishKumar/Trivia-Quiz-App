import "./App.css";

function App() {
  return (
    <div>
      <div className="App">
        <h1>Hello World!</h1>
        <h1>Quiz!</h1>
      </div>
      <div id="score"><p>score: 0 right answers out of 0 possible</p></div>
        <div>
		      <h2 id="question">Question 1</h2>
		      <div id="content">
            <div>
            <input type="radio" id="true" name="TF" value="true">
            </input>
            <label htmlFor="true">True</label>
            </div>
            <div>
            <input type="radio" id="false" name="TF" value="false">
            </input>
            <label htmlFor="true">False</label>
            </div>
		      </div>
        </div>
        <div>
		      <h2 id="question">Question 2</h2>
		      <div id="content">
            <div>
            <input type="radio" id="true" name="TF" value="true">
            </input>
            <label htmlFor="true">True</label>
            </div>
            <div>
            <input type="radio" id="false" name="TF" value="false">
            </input>
            <label htmlFor="true">False</label>
            </div>
		      </div>
        </div>
        <div>
		      <h2 id="question">Question 3</h2>
		      <div id="content">
            <div>
            <input type="radio" id="true" name="TF" value="true">
            </input>
            <label htmlFor="true">True</label>
            </div>
            <div>
            <input type="radio" id="false" name="TF" value="false">
            </input>
            <label htmlFor="true">False</label>
            </div>
		      </div>
        </div>
        <div>
		      <h2 id="question">Question 4</h2>
		      <div id="content">
            <div>
            <input type="radio" id="true" name="TF" value="true">
            </input>
            <label htmlFor="true">True</label>
            </div>
            <div>
            <input type="radio" id="false" name="TF" value="false">
            </input>
            <label htmlFor="true">False</label>
            </div>
		      </div>
        </div>
        <div>
		      <h2 id="question">Question 5</h2>
		      <div id="content">
            <div>
            <input type="radio" id="true" name="TF" value="true">
            </input>
            <label htmlFor="true">True</label>
            </div>
            <div>
            <input type="radio" id="false" name="TF" value="false">
            </input>
            <label htmlFor="true">False</label>
            </div>
		      </div>
        </div>
        <div>
		      <h2 id="question">Question 6</h2>
		      <div id="content">
            <div>
            <input type="radio" id="true" name="TF" value="true">
            </input>
            <label htmlFor="true">True</label>
            </div>
            <div>
            <input type="radio" id="false" name="TF" value="false">
            </input>
            <label htmlFor="true">False</label>
            </div>
		      </div>
        </div>
        <div>
		      <h2 id="question">Question 7</h2>
		      <div id="content">
            <div>
            <input type="radio" id="true" name="TF" value="true">
            </input>
            <label htmlFor="true">True</label>
            </div>
            <div>
            <input type="radio" id="false" name="TF" value="false">
            </input>
            <label htmlFor="true">False</label>
            </div>
		      </div>
        </div>
        <div>
		      <h2 id="question">Question 8</h2>
		      <div id="content">
            <div>
            <input type="radio" id="true" name="TF" value="true">
            </input>
            <label htmlFor="true">True</label>
            </div>
            <div>
            <input type="radio" id="false" name="TF" value="false">
            </input>
            <label htmlFor="true">False</label>
            </div>
		      </div>
        </div>
        <div>
		      <h2 id="question">Question 9</h2>
		      <div id="content">
            <div>
            <input type="radio" id="true" name="TF" value="true">
            </input>
            <label htmlFor="true">True</label>
            </div>
            <div>
            <input type="radio" id="false" name="TF" value="false">
            </input>
            <label htmlFor="true">False</label>
            </div>
		      </div>
        </div>
        <div>
		      <h2 id="question">Question 2</h2>
		      <div id="content">
            <div>
            <input type="radio" id="true" name="TF" value="true">
            </input>
            <label htmlFor="true">True</label>
            </div>
            <div>
            <input type="radio" id="false" name="TF" value="false">
            </input>
            <label htmlFor="true">False</label>
            </div>
		      </div>
        </div>
    <br></br>
		<button id="check" onclick="checkAnswer()">Submit Answer</button>
		<div id="response">
			<div id="explanation"></div>
		</div>
    </div>
  );
}
export default App;
