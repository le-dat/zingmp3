import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js"
import clsx from "clsx"
import React from "react"
import { Line } from "react-chartjs-2"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"

import { useAppSelector } from "../../../hooks/useRedux"
import { LineChartIProps } from "../interface"
import style from "./LineChart.module.scss"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const LineChart: React.FC<LineChartIProps> = ({ chart, customClass = "", items = [] }) => {
  const { baseColor, highlightColor } = useAppSelector((state) => state.skeleton)
  const labels = chart.times.map((time, index) => (index % 2 === 0 ? time.hour + ":00" : ""))
  const keysChart = Object.keys(chart.items)
  const borderColor = ["rgb(39, 189, 156)", "rgb(74, 144, 226)", "rgb(227, 80, 80)"]
  const data = {
    labels,
    datasets: keysChart.map((item, index) => ({
      label: items[index]?.title || keysChart[index],
      data: chart?.items[keysChart[index]]?.map(
        (item: { time: number; hour: string | number; counter: string | number }) => item.counter,
      ),
      borderColor: borderColor[index],
      backgroundColor: "#fff",
    })),
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      // title: {
      //   display: true,
      //   text: "#zingchart",
      // },
    },
  }

  return (
    <SkeletonTheme baseColor={baseColor} highlightColor={highlightColor}>
      <div className={clsx(style.wrapper, customClass)}>
        {chart.times.length > 5 ? (
          <Line datasetIdKey="id" options={options} data={data} />
        ) : (
          <Skeleton height={"100%"} />
        )}
      </div>
    </SkeletonTheme>
  )
}

export default LineChart
