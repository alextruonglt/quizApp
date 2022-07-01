import './App.css';
import React from "react"
import Start from "./components/Start"
import Questions from "./components/Questions"

function App() {

  const [startQuiz, setStartQuiz] = React.useState(false)
  const [quizdata, setQuizData] = React.useState([])


  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple")
      .then(res => res.json())
      .then(data => setQuizData(data.results))
  }, [])

  console.log(quizdata)

  function startGame() {
    setStartQuiz(prevStartQuiz => !prevStartQuiz)
  }


  return (
    <div className="App">
      {startQuiz ?
        <Questions
          quizdata={quizdata}
        /> :
        <Start
          startGame={startGame}

        />}
    </div>
  );
}

export default App;
