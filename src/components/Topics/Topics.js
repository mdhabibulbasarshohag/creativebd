import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleTopics from '../SingleTopics/SingleTopics';

const Topics = () => {
    const topicsDate = useLoaderData();
    const topics = topicsDate.data;
    return (
        <div className='container'>
            <h1 className=' text-center py-3'>All Topics {topics.length}</h1>
            <div className=' row row-cols-1 row-cols-md-2 row-cols-lg-4'>
                {
                    topics.map(singleTopics => <SingleTopics
                        singleTopics={singleTopics}
                        key={singleTopics.id}
                    ></SingleTopics>)
                }
            </div>
        </div>
    );
};

export default Topics;