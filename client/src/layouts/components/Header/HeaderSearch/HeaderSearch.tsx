/* eslint-disable @typescript-eslint/no-unused-expressions */
import HeadlessTippy from "@tippyjs/react/headless"
import clsx from "clsx"
import React, { useRef, useState } from "react"
import { BsSearch } from "react-icons/bs"
import { IoCloseOutline } from "react-icons/io5"

import useSearch from "../../../..//hooks/useSearch"
import { SuggestArtist, SuggestItem } from "../../../../components/SuggestItem"
import PopperWrapper from "../../../../components/Wrapper/PopperWrapper"
import style from "./HeaderSearch.module.scss"

const HeaderSearch: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>("")
  const [showResult, setShowResult] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const { searchResult, loading } = useSearch(searchValue)

  const handleHideResult = () => setShowResult(false)
  const handleShowResult = () => setShowResult(true)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (!value.startsWith(" ")) {
      setSearchValue(value)
    }
  }

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>)
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  const handleDelete = () => {
    setSearchValue("")
    inputRef.current?.focus()
  }

  const renderResult = (attrs: any) => (
    <div className={style.searchContainer} tabIndex="-1" {...attrs}>
      <PopperWrapper customClass={clsx("scrollbar", style.searchResult)}>
        {loading ? (
          <div className={style.searchTitle}>Tìm kiếm &apos;{searchValue}&apos;</div>
        ) : searchResult.songs.length > 0 ? (
          <div>
            <h2 className={style.resultTitle}>Gợi ý kết quả</h2>
            <div className={style.resultList}>
              {searchResult.artists.map(
                (item, index) =>
                  !item.link.startsWith("/nghe-si") && <SuggestArtist key={`suggest-artist-${index}`} {...item} />,
              )}
              {searchResult.songs.map(
                (item, index) => item.album && <SuggestItem key={`suggest-song-${item.encodeId}-${index}`} {...item} />,
              )}
            </div>
          </div>
        ) : (
          searchValue.trim().length > 0 && (
            <div className={style.searchTitle}>Không có kết quả phù hợp. Hãy thử nhập từ khóa khác.</div>
          )
        )}
      </PopperWrapper>
    </div>
  )

  return (
    <div className={style.search}>
      <HeadlessTippy
        interactive
        offset={[0, 0]}
        visible={showResult}
        render={(attrs) => renderResult(attrs)}
        onClickOutside={handleHideResult}
      >
        <form className={style.form} onSubmit={handleSubmit} method="get">
          <div className={style.container}>
            <input
              ref={inputRef}
              value={searchValue}
              onChange={handleChange}
              onKeyDown={handleEnter}
              onFocus={handleShowResult}
              className={clsx(style.input, { [style.inputWrapper]: searchValue })}
              type="text"
              placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
            />
            <button type="submit" className={clsx(style.btn, style.btnSearch)}>
              <BsSearch />
            </button>
            {searchValue && (
              <button className={clsx(style.btn, style.btnDelete)} onClick={handleDelete}>
                <IoCloseOutline />
              </button>
            )}
          </div>
        </form>
      </HeadlessTippy>
    </div>
  )
}

export default HeaderSearch
