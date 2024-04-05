import React from 'react';
import Quiz from 'react-quiz-component';
import { quiz } from './quiz';

function App() {
  return (
    <div className="App">
      <Quiz quiz={quiz} timer={300} shuffleAnswer={true} shuffle={true} showInstantFeedback={true} showDefaultResult={false} customResultPage={renderCustomResultPage}/>
    </div>
  );
}

const renderCustomResultPage = (obj) => {
  return (
    <div id="result-page">
      <h1 id="result-title">Resultados do Quiz: Comidas Típicas de Goiás</h1>
      <p id="completion-message">Você completou o quiz!</p>
      <p class="result-detail">Você acertou {obj.numberOfCorrectAnswers} de {obj.numberOfQuestions} perguntas.</p>
      <p class="result-detail">Sua pontuação é: {obj.correctPoints} de {obj.totalPoints} pontos.</p>
      <button type="button" className="startQuizBtn btn" onClick={() => window.location.reload()}>Jogar Novamente</button>
    </div>
  )
}

export default App;
