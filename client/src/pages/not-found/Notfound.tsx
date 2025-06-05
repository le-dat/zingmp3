import React from "react"
import { Helmet } from "react-helmet-async"

import images from "../../assets/images"
import Image from "../../components/Image"
import style from "./NotFound.module.scss"

const Notfound: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zing Mp3 | Not Found</title>
      </Helmet>

      <div className={style.wrapper}>
        <Image src={images.background.notFound} className={style.image} />
      </div>
    </>
  )
}

export default Notfound
