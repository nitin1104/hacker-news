import React from 'react';
import { BarChart, Bar, CartesianGrid, ReferenceLine, XAxis, YAxis, Tooltip} from 'recharts';

export default function MyChart (props) {
    return (
      <div className="chart-container">
        <BarChart width={1200} height={250} barGap={2} barSize={6} data={props.data} margin={{ top: 20, right: 60, bottom: 0, left: 20 }}>
        <XAxis dataKey="objectID" />
        <YAxis tickCount={7} />
        <Tooltip />
        <CartesianGrid/>
        <Bar dataKey="points" fill="#ff7300" radius={[5, 5, 5, 5]} />
        <ReferenceLine type="horizontal" value={0} stroke="#666" />
      </BarChart>
      </div>
      
    )
}