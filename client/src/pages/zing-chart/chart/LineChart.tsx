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

const useChartData = (chart: LineChartIProps["chart"], items: LineChartIProps["items"]) => {
  const labels = chart.times.map((time, index) => (index % 2 === 0 ? `${time.hour}:00` : ""))
  const keysChart = Object.keys(chart.items)
  const borderColor = ["rgb(39, 189, 156)", "rgb(74, 144, 226)", "rgb(227, 80, 80)"]

  const datasets = keysChart.map((key, index) => ({
    label: items?.[index]?.title || key,
    data: chart.items[key].map((item: { counter: string | number }) => item.counter),
    borderColor: borderColor[index],
    backgroundColor: "#fff",
  }))

  return { labels, datasets }
}

const useChartOptions = () => ({
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
})

const LineChart: React.FC<LineChartIProps> = ({ chart, customClass = "", items = [] }) => {
  const { baseColor, highlightColor } = useAppSelector((state) => state.skeleton)
  const { labels, datasets } = useChartData(chart, items)
  const options = useChartOptions()

  return (
    <SkeletonTheme baseColor={baseColor} highlightColor={highlightColor}>
      <div className={clsx(style.wrapper, customClass)}>
        {chart.times.length > 5 ? (
          <Line datasetIdKey="id" options={options} data={{ labels, datasets }} />
        ) : (
          <Skeleton height={"100%"} />
        )}
      </div>
    </SkeletonTheme>
  )
}

export default LineChart
