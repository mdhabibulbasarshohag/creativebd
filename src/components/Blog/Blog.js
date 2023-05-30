import React from 'react';
// import './Blog.css';
import Accordion from 'react-bootstrap/Accordion';

const Blog = () => {
    return (
        <div className='container'>
            <div className='py-5' data-aos="fade-up-left" data-aos-duration="3000">
                <Accordion defaultActiveKey={['0']} alwaysOpen >
                    <Accordion.Item eventKey="0" className='shadow-lg'>
                        <Accordion.Header className='accordions-header'>What is the purpose of React Router ?</Accordion.Header>
                        <Accordion.Body>
                            React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header className='accordions-header'>What is it and How it works?</Accordion.Header>
                        <Accordion.Body>
                            <strong>What is Context API?</strong>
                            The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.<br /><br />
                            <strong>How it works?</strong>
                            React.createContext is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header className='accordions-header'>What does href do in React?</Accordion.Header>
                        <Accordion.Body>
                            The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div >
        </div >
    );
};

export default Blog;