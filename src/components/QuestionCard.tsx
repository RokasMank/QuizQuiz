import React from 'react';
import {AnswerObject} from "./About1";
type Props = {
question :string;
answers :string[];
callback:(e:React.MouseEvent<HTMLButtonElement>) =>void;
userAnswer:any;
questionNumber:number;
totalQuestions:number;
}
const QuestionCard: React.FC<Props> = ({question, answers, callback, userAnswer, questionNumber, totalQuestions}) =>
    (

    <div>
        <p className="number">
            Question : {questionNumber} / {totalQuestions}
        </p>
        <p dangerouslySetInnerHTML={{__html: question}}/>
        <div>
            {answers.map(answer =>(
                
                <div key={answer}>
                    
                    <button  className="quizCardButton" disabled ={!!userAnswer} value={answer} onClick={callback}>
                        <span dangerouslySetInnerHTML = {{__html:answer}}/>
                    </button>
                </div>
            ))}
        </div>
    </div>
);



export default QuestionCard;