import React from 'react';
import Swal from 'sweetalert2';
import './QuizDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-regular-svg-icons';


const QuizDetails = ({ quizDetails }) => {
    // console.log(quizDetails);
    const { question, correctAnswer } = quizDetails;

    const showanswer = () => {
        let timerInterval
        Swal.fire({
            title: ' Answer : ' + correctAnswer,
            html: 'I will close in <b></b>.',
            timer: 3000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading()
                const b = Swal.getHtmlContainer().querySelector('b')
                timerInterval = setInterval(() => {
                    b.textContent = Swal.getTimerLeft()
                }, 100)
            },
            willClose: () => {
                clearInterval(timerInterval)
            }
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log('I was closed by the timer')
            }
        })
    }

    const currectans = (option) => {
        if (option === correctAnswer) {
            Swal.fire(
                'Good job!',
                'Correct Answer',
                'success'
            )
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Wrong! Answer',
            })
            // return 'warning'
        }
    }

    return (
        <div>
            <div className=' border border-3 rounded-2 p-3 my-3 shadow border-primary'>
                <div>
                    <FontAwesomeIcon onClick={showanswer} className='fs-4' icon={faEye} />
                </div>
                <div className='text-center py-3'>
                    <div>
                        <h5>question : {question}</h5>
                    </div>

                </div>
                <div className=''>
                    {
                        quizDetails.options.map(option => <div
                        >
                            <button
                                className='w-100 py-3 my-2 border-2 rounded-3 quiz-button'
                                onClick={() => currectans(option)}
                            >
                                {option}
                            </button>
                        </div>)
                    }
                </div>
            </div>
        </div >
    );
};

export default QuizDetails;