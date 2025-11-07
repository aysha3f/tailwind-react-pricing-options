import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const resultData = [
  {
    "id": "stu_001",
    "name": "Aarav Mehta",
    "math": 88,
    "science": 92,
    "english": 81,
    "history": 75,
    "computer": 95
  },
  {
    "id": "stu_002",
    "name": "Isha Kapoor",
    "math": 79,
    "science": 85,
    "english": 90,
    "history": 80,
    "computer": 87
  },
  {
    "id": "stu_003",
    "name": "Rohan Singh",
    "math": 91,
    "science": 89,
    "english": 78,
    "history": 84,
    "computer": 92
  },
  {
    "id": "stu_004",
    "name": "Tanya Verma",
    "math": 76,
    "science": 81,
    "english": 88,
    "history": 90,
    "computer": 85
  },
  {
    "id": "stu_005",
    "name": "Kabir Patel",
    "math": 95,
    "science": 94,
    "english": 86,
    "history": 79,
    "computer": 98
  },
  {
    "id": "stu_006",
    "name": "Simran Nair",
    "math": 83,
    "science": 87,
    "english": 92,
    "history": 85,
    "computer": 90
  },
  {
    "id": "stu_007",
    "name": "Arjun Das",
    "math": 70,
    "science": 75,
    "english": 80,
    "history": 72,
    "computer": 78
  },
  {
    "id": "stu_008",
    "name": "Meera Shah",
    "math": 89,
    "science": 93,
    "english": 84,
    "history": 77,
    "computer": 91
  },
  {
    "id": "stu_009",
    "name": "Dev Khanna",
    "math": 82,
    "science": 79,
    "english": 76,
    "history": 88,
    "computer": 80
  },
  {
    "id": "stu_010",
    "name": "Ananya Rao",
    "math": 94,
    "science": 96,
    "english": 91,
    "history": 89,
    "computer": 97
  }
]


const ResultsCharts = () => {
    return (
        <div>
          <LineChart width={800} height={800} data={resultData}>
          <XAxis dataKey="name"></XAxis>
          <YAxis></YAxis>
          <Line dataKey='math'></Line>
          <Line dataKey={'english'} stroke='red'></Line>
          </LineChart>  
        </div>
    );
};

export default ResultsCharts;