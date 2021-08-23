import { React, useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

const LineChart = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const chart = async () => {
      let xAxisData = [];
      let yAxisData = [];

      const response = await axios({
        url: "http://localhost:8000/v1/chart-data",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      for (let dataObj of response.data.data.data_for_graph.complete) {
        xAxisData.push(parseInt(dataObj.x));
        yAxisData.push(parseInt(dataObj.y));
      }
      setChartData({
        data: {
          labels: xAxisData,
          datasets: [
            {
              label: "readmission/mortality risk",
              data: yAxisData,
              fill: true,
              backgroundColor: "rgba(75,192,192,0.2)",
              borderColor: "rgba(75,192,192,1)",
            },
          ],
        },
      });
    };
    chart();
  }, []);

  return (
    <div className="container">
      <h2>Pacmed ICU Chart</h2>
      <div>
        <Line
          data={chartData.data}
          width={144}
          height={144}
          options={{ maintainAspectRatio: false }}
        />
      </div>
    </div>
  );
};

export default LineChart;
