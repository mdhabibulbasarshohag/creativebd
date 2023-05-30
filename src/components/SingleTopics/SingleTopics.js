import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './SingleTopics.css'

const SingleTopics = ({ singleTopics }) => {
    const { id, name, logo, total } = singleTopics;
    const navigate = useNavigate();
    const handleTopics = () => {
        navigate(`/topics/${id}`)
    }
    return (
        <div className='py-2'>
            <Card className='cart-body'>
                <Card.Img variant="top" src={logo} />
                <Card.Body className=' d-flex justify-content-between align-items-center'>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <span>Quiz</span> : <span>{total}</span>
                    </Card.Text>
                </Card.Body>
                <Button className='py-3 btn-5956E8' onClick={handleTopics}>Let's start</Button>
            </Card>
        </div>
    );
};

export default SingleTopics;