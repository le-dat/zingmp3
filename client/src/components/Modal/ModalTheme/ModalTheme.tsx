import clsx from "clsx"
import { IoMdClose } from "react-icons/io"

import { useAppDispatch, useAppSelector } from "../../../hooks/useRedux"
import { setShowThemeModal } from "../../../redux/reducers/themeSlice"
import { ButtonIcon } from "../../Button"
import { PopperWrapper } from "../../Wrapper"
import style from "./ModalTheme.module.scss"
import ThemeItem from "./ModalThemeItem"

const ModalTheme: React.FC = () => {
  const dispatch = useAppDispatch()
  const { listTheme } = useAppSelector((state) => state.theme)
  const { isShowThemeModal } = useAppSelector((state) => state.theme)

  const handleCloseModal = () => {
    dispatch(setShowThemeModal(false))
  }
  return (
    <div className={clsx(style.wrapper, { [style.active]: isShowThemeModal })} onClick={handleCloseModal}>
      <PopperWrapper customClass={style.container} onClick={(e) => e.stopPropagation()}>
        <div className={style.heading}>
          <h3>Giao Diện</h3>
          <ButtonIcon title='Đóng' icon={<IoMdClose />} onClick={handleCloseModal} customClass={style.iconClose} />
        </div>
        <div className={clsx("scrollbar", style.main)}>
          <div>
            {listTheme.map((list, index) => (
              <div key={`listTheme-${index}`} className={clsx("grid", style.list)}>
                <h3 className={style.title}>{list.name}</h3>

                <div className='row'>
                  {list.items.map((item, i) => (
                    <ThemeItem
                      key={`theme-${i}`}
                      listThemeIndex={index}
                      themeIndex={i}
                      customClass={clsx("col l-2 m-4 c-6", style.item)}
                      {...item}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </PopperWrapper>
    </div>
  )
}

export default ModalTheme
