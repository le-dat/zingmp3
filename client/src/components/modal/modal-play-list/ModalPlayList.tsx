import clsx from "clsx"
import { useEffect } from "react"

import { useAppDispatch, useAppSelector } from "../../../hooks/useRedux"
import { setPlayList, setSongIndex } from "../../../redux/reducers/playListSlice"
import * as services from "../../../services"
import { ButtonTitle } from "../../button"
import Media from "../../media"
import style from "./ModalPlayList.module.scss"

const ModalPlayList: React.FC = () => {
  const dispatch = useAppDispatch()
  const {
    album: { encodeId },
  } = useAppSelector((state) => state.song)
  const { playListSong, isShowPlayListModal } = useAppSelector((state) => state.playList)

  useEffect(() => {
    const fetchData = async () => {
      const res = await services.getDetailPlayList(encodeId as string)
      const playlist = [...(res?.song?.items || []), ...(res?.sections[0]?.items || [])]
      console.log(playlist)
      dispatch(setPlayList(playlist))
      dispatch(setSongIndex(0))
    }

    if (encodeId) fetchData()
  }, [dispatch, encodeId])

  return (
    <div className={clsx(style.wrapper, { [style.active]: isShowPlayListModal })}>
      <div className={clsx(style.container)}>
        <div className={style.header}>
          <ButtonTitle rounded outline>
            Danh sách phát
          </ButtonTitle>
          <ButtonTitle disable rounded outline>
            Gần đây
          </ButtonTitle>
        </div>
        <div className={clsx("scrollbar", style.main)}>
          {playListSong.map((item, index) => (
            <Media key={`item-playlist-${index}`} {...item} small iconHeart iconThreeDots />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ModalPlayList
