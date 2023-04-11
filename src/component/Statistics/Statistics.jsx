import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Line } from 'recharts';

const Statistics = () => {
    const marks = [
        {
            "id": 1,
            "subject": "Assignment-1",
            "marks": 57
        },
        {
            "id": 2,
            "subject": "Assignment-2",
            "marks": 55
        },
        {
            "id": 3,
            "subject": "Assignment-3",
            "marks": 55
        },
        {
            "id": 4,
            "subject": "Assignment-4",
            "marks": 60
        },
        {
            "id": 5,
            "subject": "Assignment-5",
            "marks": 60
        },
        {
            "id": 6,
            "subject": "Assignment-6",
            "marks": 52
        },
        {
            "id": 7,
            "subject": "Assignment-7",
            "marks": 60
        }

    ]
    return (
        <div>
            <div className='mb-12 mt-5'>
                <h2 className='text-3xl text-purple-600 text-center'>Showing are the assignment marks using AreaChart</h2>
            </div>
            <AreaChart
                width={1000}
                height={600}
                data={marks}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="subject" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="marks" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
        </div>
    );
};

export default Statistics;
