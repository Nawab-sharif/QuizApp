import React, { useState } from 'react'
import { QuizData } from '../Data/QuizData';
import QuizScore from './QuizScore';

const Quiz = () => {
    const [currentQues,setCurrentQues] = useState(0);
    const [selectOption,setSelectOption] = useState(0);
    const [score,setScore] = useState(0);
    const [showResult,setShowResult] = useState(false);

    const changeQuestion = () =>{
        if(currentQues<QuizData.length-1){
            setCurrentQues(currentQues+1);
            setSelectOption(0);
        }
        else{
            setShowResult(true)
        }

        const updateScore = () => {
            if(selectOption===QuizData[currentQues].answer){
                setScore(score+1);
            }
        }
        updateScore();  
    }

    const resetAll = () => {
        setShowResult(false);
        setCurrentQues(0);
        setSelectOption(0);
        setScore(0);
    }

  return (
    <>
      <h1 className="heading-text">Quiz App</h1>
      <div className="container">
            {showResult ? (<QuizScore score={score} totalScore={QuizData.length} tryAgain={resetAll}/>):(
            <>
                <div className="question">
                    <span id="question-number">{currentQues+1}.</span>
                    <span id="question-txt">{QuizData[currentQues].quetion}</span>
                </div>
                <div className="option-container">
                    {QuizData[currentQues].options.map((Option,index)=>{
                        return(
                                <button 
                                    className={`option-btn ${selectOption === index+1? "checked":null }`}
                                    key={index}
                                    onClick={()=>setSelectOption(index+1)}>
                                    {Option}
                                    </button>
                                )
                    })}
                </div>
                <input type="button" value="Next" id='next-button' onClick={changeQuestion} />
            </>)}
      </div>
    </>
  )
}

export default Quiz;
