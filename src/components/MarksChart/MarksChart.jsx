import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const MarksChart = ({marksPromise}) => {
   
   const marksDataRes = use(marksPromise);
   const marksData = marksDataRes.data;

   // data processing for the chart
   const marksChartData = marksData.map(studentData => {

    const student ={
        id: studentData.id,
        name: studentData.name,
        math: studentData.marks.math,
        science: studentData.marks.science,
       english: studentData.marks.english,
      history: studentData.marks.history,
        computer: studentData.marks.computer

    }
const avg = (student.math + student.history + student.computer + student.english + student.science) / 5;
student.avg = avg;

    return student;
   })
   console.log(marksChartData)

    return (
        <div>
            <BarChart width={500} height={300} data={marksChartData}>
          <XAxis dataKey='name'></XAxis>
          <YAxis></YAxis>
          <Bar dataKey='avg' fill='yellow'></Bar>
          <Bar dataKey='english' fill='blue'></Bar>
            </BarChart>
        </div>
    );
};

export default MarksChart;