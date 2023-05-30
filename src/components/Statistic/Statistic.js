import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Data from '../Data/Data';

const Statistic = () => {
    const ChartData = useLoaderData();
    return (
        <div className='container'>
            <div>
                <h1 className='text-center mt-5'>Statistic Quiz Info</h1>
            </div>
            <div>
                <Data key={ChartData.id} ChartData={ChartData}></Data>
            </div>
        </div>
    );
};

export default Statistic;