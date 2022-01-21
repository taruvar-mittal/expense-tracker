import React,{useEffect} from 'react';
import Chart from 'chart.js/auto'


function ExpenseChart(props) {

    const {expenses} = props;

    useEffect(() => {
        const ctx = document.getElementById("myChart");
        var chart = new Chart(ctx, {
          type: "pie",
          data: {
            labels: expenses.map((el) => {
                return el.title;
            }),
            datasets: [
              {
                label: "Expenses",
                data: expenses.map((el) => {
                    return el.value;
                }),
                backgroundColor: [
                  "Red",
                  "Blue",
                  "Yellow",
                  "Green",
                  "Purple",
                  "Orange"
                ],
                borderColor: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                borderWidth: 1
              }
            ]
          }
        });
        // chart.destroy();
      });

  return <div>
      <canvas id="myChart" style={{width:200, height:200}} />
  </div>;
}

export default ExpenseChart;
