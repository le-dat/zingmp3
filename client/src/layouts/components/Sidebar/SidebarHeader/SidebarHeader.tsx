import clsx from "clsx"
import { Link } from "react-router-dom"

import images from "../../../../assets/images"
import Image from "../../../../components/Image"
import { KHAM_PHA } from "../../../../constants"
import { useAppSelector } from "../../../../hooks/useRedux"
import style from "./SidebarHeader.module.scss"

const SidebarHeader = () => {
  const { isExpanded } = useAppSelector((state) => state.sidebar)

  return (
    <div className={clsx(style.header, { [style.isExpanded]: isExpanded })}>
      <Link to={KHAM_PHA} className={clsx(style.headerLinks)}>
        <Image src={images.icon.zingMP3} alt="zingmp3" className={clsx(style.icon)} />
        <Image src={images.logo.dark} alt="Zing MP3" className={clsx(style.logo)} />
      </Link>
    </div>
  )
}

export default SidebarHeader
