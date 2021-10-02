import React, { useEffect, useState } from "react";

import useSound from 'use-sound';
import play from '../assets/play.mp3'
import correct from '../assets/correct.mp3'
import wrong from '../assets/wrong.mp3'

const Quiz = ({ data, setStop, questionNumber, setQuestionNumber }) => {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [ansClassName, setAnsClassName] = useState("answer");


  const [letsPlay] = useSound(play);
  const [correctAns] = useSound(correct);
  const [wrongAns] = useSound(wrong);

  useEffect(() => {
    letsPlay();
  }, [letsPlay])

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleAnswer = (ans) => {
    setSelectedAnswer(ans);
    setAnsClassName("answer active");

    delay(3000, () =>
      setAnsClassName(ans.correct ? "answer correct" : "answer wrong")
    );

    delay(4000, () => {
      if (ans.correct) {
        correctAns();
        delay(2000, () => {
          setQuestionNumber((previous) => previous + 1);
          setSelectedAnswer(null);
        });
      } else {
        wrongAns();
        delay(2000, () => {
          setStop(true);
        });
      }
    });
  };

  useEffect(() => {
    if (questionNumber - 1 === data.length) {
      setStop(true);
    }
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber, setStop]);
  return (
    <div className="quiz">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((answer, index) => {
          return (
            <div
              key={index}
              className={selectedAnswer === answer ? ansClassName : "answer"}
              onClick={() => handleAnswer(answer)}
            >
              <span className="option">&#x2756; {answer.option}: </span>
              {answer.text}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Quiz;
