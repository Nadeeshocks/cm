import React from 'react'
import chroma from 'chroma-js';
import { BarChart, BarSeries, Bar } from "reaviz";

const data = [
  { key: 12, data: 14, color : "#ffffff"},
  { key: 13, data: 5 },
  { key: 14, data: 18 }
];

export default () =>
(
  <BarChart width={600} height={300} data={data} className="BarChart" 
  series={ <BarSeries
      colorScheme={chroma
        .scale(['#f82462'])
        .colors(data.length)}
      bar={<Bar width={150} />}
      padding={0.5}
      /> }
    />
) 