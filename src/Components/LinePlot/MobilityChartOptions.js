export const options = {
  chart: {
    type: "spline",
    width: 1000,
    height: 550,
    backgroundColor: "#F6F6F6",
  },

  title: {
    text: "",
  },

  yAxis: {
    title: "",
  },

  xAxis: {
    labels: {
      formatter: function () {
        return "July" + (this.value + 1).toString();
      },
    },
  },

  legend: {
    enabled: false,
  },

  tooltip: {
    formatter: function () {
      return "" + this.series.name + ": " + this.y + "%";
    },
  },

  plotOptions: {
    series: {
      marker: {
        enabled: false,
        states: {
          hover: {
            enabled: false,
          },
        },
      },
      dataLabels: {
        enabled: true,
        crop: false,
        overflow: "none",
        align: "left",
        verticalAlign: "middle",
        formatter: function () {
          var last = this.series.data[this.series.data.length - 1];
          if (this.point.category === last.category) {
            return `<span style="color: ${this.series.color}"> ${this.series.name} </span>`;
          }
          return "";
        },
      },
      animation: {
        duration: 1500,
      },
    },
  },

  credits: {
    enabled: false,
  },

  series: [],
};
