import clsx from "clsx"
import React from "react"
import { AiOutlineMinus } from "react-icons/ai"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"

import { useAppSelector } from "../../../hooks/useRedux"
import style from "./Prefix.module.scss"

interface IProps {
  index: number
  small?: boolean
}

const PrefixNum: React.FC<IProps> = ({ index, small }) => {
  const { baseColor, highlightColor } = useAppSelector((state) => state.skeleton)
  const className = clsx(style.prefix, { [style.small]: small })

  return (
    <SkeletonTheme baseColor={baseColor} highlightColor={highlightColor}>
      <div className={className}>
        <div className={clsx(style.prefixNum, `number-${index}`)}>{index || <Skeleton />}</div>
        <AiOutlineMinus className={style.icon} />
      </div>
    </SkeletonTheme>
  )
}

export default PrefixNum
