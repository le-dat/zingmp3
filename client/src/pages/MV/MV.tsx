import clsx from "clsx"
import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet-async"
import { HiOutlineMusicalNote } from "react-icons/hi2"
import { VscListSelection } from "react-icons/vsc"

import ButtonDropDown from "../../components/Button/ButtonDropDown"
import { CardVideo } from "../../components/Card"
import { TabNav } from "../../components/Tab"
import { TabWrapper } from "../../components/Wrapper"
import { HAN_QUOC, HOA_TAU, MV as MV_ROUTER, US_UK, VIET_NAM } from "../../constants"
import { useScrollTop } from "../../hooks"
import { MediaIProps } from "../../interface"
import * as services from "../../services"
import { getToastWarn } from "../../utils/toast"
import style from "./MV.module.scss"

interface ResponseListMVIProps {
  items: MediaIProps[]
  total: number | string
}
interface ChildIProps {
  id: string
  name: string
  title?: string
}
interface CategoryIProps {
  childs: ChildIProps[]
}
const TYPE = [
  { name: "VIỆT NAM", link: VIET_NAM, id: "IWZ9Z08I" },
  { name: "US-UK", link: US_UK, id: "IWZ9Z08O" },
  { name: "KOREAN", link: HAN_QUOC, id: "IWZ9Z08W" },
  { name: "HÒA TẤU", link: HOA_TAU, id: "IWZ9Z086" },
]
const FILTER = [
  { id: "1", name: "Nghe nhiều" },
  { id: "2", name: "Nổi bật" },
  { id: "3", name: "Mới nhất" },
]

const MV: React.FC = () => {
  useScrollTop()
  const [listMV, setListMV] = useState<MediaIProps[]>(Array(12).fill({}))
  const [tab, setTab] = useState<number>(0)
  const [page, setPage] = useState<number>(1)
  const [count, setCount] = useState<number>(15)
  const [category, setCategory] = useState<ChildIProps[]>([])

  useEffect(() => {
    const fetchApi = async () => {
      const res: ResponseListMVIProps = await services.getListMV({ id: TYPE[tab].id, page, count })
      setListMV(res.items)
    }
    fetchApi()
  }, [tab, page, count])

  useEffect(() => {
    const fetchApi = async () => {
      const res: CategoryIProps = await services.getCategoryMV(TYPE[tab].id)
      console.log(res)
      setCategory(res.childs)
    }
    fetchApi()
  }, [tab])

  const handleFilter = () => {
    return getToastWarn({ msg: "Chức năng này chịu =))" })
  }

  return (
    <>
      <Helmet>
        <title>Video | Tuyển tập nhạc hay</title>
      </Helmet>

      <div className={style.wrapper}>
        <TabWrapper>
          <div className={style.header}>MV</div>
          {TYPE?.map((item, index) => (
            <div key={`type-mv-${index}`} onClick={() => setTab(index)} className="is-center">
              <TabNav small to={`/${MV_ROUTER}/${item.link}`}>
                {item.name}
              </TabNav>
            </div>
          ))}
        </TabWrapper>

        <div className={style.searchNav}>
          <ButtonDropDown title="Tất Cả" leftIcon={<HiOutlineMusicalNote />} customClass={style.searchNavBtn}>
            <div className={style.searchNavBody}>
              <div className="grid">
                <div className={clsx("row", style.searchNavMenu)}>
                  {category.map((item, index) => (
                    <div
                      key={`category-item-${index}`}
                      onClick={handleFilter}
                      className={clsx("col l-6 m-6 c-12", style.searchNavItem)}
                    >
                      {item?.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ButtonDropDown>

          <ButtonDropDown title={FILTER[0].name} leftIcon={<VscListSelection />} customClass={style.searchNavBtn}>
            <div className={style.searchNavFilter}>
              {FILTER.map((item, index) => (
                <div key={`filter-item-${index}`} onClick={handleFilter} className={style.searchNavItem}>
                  {item?.name}
                </div>
              ))}
            </div>
          </ButtonDropDown>
        </div>

        <div className="grid">
          <div className={clsx("row", style.container)}>
            {listMV.map((item, index) => (
              <div key={`media-${item?.encodeId}-${index}`} className={clsx("col l-4 m-6 c-12", style.item)}>
                <CardVideo {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default MV
