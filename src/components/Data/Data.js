import React from "react";
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';


const Data = ({ ChartData }) => {
    const { data } = ChartData;
    const { name } = data;

    return (
        <div className="container">
            <div style={{ width: "100%", height: 400 }}>
                <ResponsiveContainer >
                    <RadarChart outerRadius={150} width={500} height={500} data={data}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="name" />
                        <PolarRadiusAxis angle={30} domain={[0, 10]} />
                        <Radar name={name} dataKey="id" fill="#8884d8" fillOpacity={0.6} />
                        <Radar name={name} dataKey="total" fill="#82ca9d" fillOpacity={0.6} />
                        <Tooltip />
                        <Legend />
                    </RadarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default Data;