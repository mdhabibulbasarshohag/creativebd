import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from '../QuizDetails/QuizDetails';

const Quiz = () => {
    const totalQuiz = useLoaderData();
    // const { data } = totalQuiz;
    const { name, questions } = totalQuiz.data;
    // console.log(totalQuiz.data);
    return (
        <div className='container py-5'>
            <div className=' text-center py-3'>
                <h2>Quiz of : {name}</h2>
            </div>
            <div className='py-3'>
                {
                    questions.map(quizDetails => <QuizDetails
                        quizDetails={quizDetails}
                        key={quizDetails.id}
                    ></QuizDetails>)
                }
            </div>
        </div>
    );
};

export default Quiz;