import clsx from "clsx"
import React from "react"

import { useAppSelector } from "../../../hooks/useRedux"
import { currentThemeSelector } from "../../../redux/selectors/themeSelector"
import ThemeItem from "./ThemeItem"
import style from "./ThemeList.module.scss"

const ThemeList: React.FC = () => {
  const currentTheme = useAppSelector(currentThemeSelector)
  const { listTheme } = useAppSelector((state) => state.theme)

  return (
    <div className={clsx("scrollbar", style.wrapper)}>
      <div>
        {listTheme.map((list, listThemeIndex) => (
          <div key={`listTheme-${listThemeIndex}`} className={clsx("grid", style.list)}>
            <h3 className={style.title}>{list.title}</h3>

            <div className="row">
              {list.items.map((item, themeIndex) => (
                <div key={`theme-${themeIndex}`} className="col l-2 m-4 c-6">
                  <ThemeItem
                    listThemeIndex={listThemeIndex}
                    themeIndex={themeIndex}
                    active={currentTheme === listTheme[listThemeIndex].items[themeIndex]}
                    {...item}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ThemeList
