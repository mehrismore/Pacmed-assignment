import { React, useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

const LineChart = () => {
  const [chartData, setChartData] = useState({});
  const [xAxisData, setXAxisData] = useState([]);
  const [yAxisData, setYAxisData] = useState([]);

  const chart = () => {
    let xAxisData = [];
    let yAxisData = [];
    axios
      .get("../data/chart.json")
      .then((response) => {
        console.log(response);
        for (const dataObj of response.data_for_graph.complete) {
          xAxisData.push(parseInt(dataObj.data_for_graph.complete[0]));
          yAxisData.push(parseInt(dataObj.data_for_graph.complete[1]));
        }
        setXAxisData([xAxisData]);
        setYAxisData([yAxisData]);
        setChartData({
          labels: ['25 Jan', '26 Jan', '27 Jan','28 Jan', 'Gisteren', 'Vandaag'],
          datasets: [
            {
              label: "readmission/ mortality risk",
              data: {xAxisData},
              fill: true,
              backgroundColor: "rgba(75,192,192,0.2)",
              borderColor: "rgba(75,192,192,1)",
            },
          ],
        });
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(xAxisData, yAxisData);
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <div className='container'>
      <h2>Pacmed ICU Chart</h2>
      <div>
        <Line
          data={chartData}
          options={{
            responsive: true,
            title: { text: "some text", display: true },
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true,
                  },
                  gridLines: {
                    display: false,
                  },
                },
              ],
              xAxes: [
                {
                  gridLines: {
                    display: false,
                  },
                },
              ],
            },
          }}
        />
      </div>
    </div>
  );
};

export default LineChart;
