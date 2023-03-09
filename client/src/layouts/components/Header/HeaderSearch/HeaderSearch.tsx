/* eslint-disable @typescript-eslint/no-unused-expressions */
import HeadlessTippy from "@tippyjs/react/headless";
import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";

import { SuggestArtist, SuggestItem } from "../../../../components/SuggestItem";
import PopperWrapper from "../../../../components/Wrapper/PopperWrapper";
import { useDebounce } from "../../../../hooks";
import { ArtistIProps, MediaIProps } from "../../../../interface";
import * as services from "../../../../services";
import style from "./HeaderSearch.module.scss";

interface SearchIProps {
  artists: ArtistIProps[];
  songs: MediaIProps[];
}
const HeaderSearch = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchResult, setSearchResult] = useState<SearchIProps>({
    artists: [{ thumbnailM: "", name: "", link: "", totalFollow: 0 }],
    songs: [
      {
        encodeId: "",
        thumbnailM: "",
        title: "",
        artistsNames: "",
        artists: [],
        streamingStatus: 1,
        duration: 0,
        album: { encodeId: "" },
      },
    ],
  });
  const [showResult, setShowResult] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const debounce = useDebounce({ value: searchValue, delay: 500 });
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!debounce.trim()) {
      setSearchResult({ artists: [], songs: [] });
      return;
    }
    const fetchApi = async () => {
      setLoading(true);
      const res = await services.search(debounce);
      console.log(res);
      setSearchResult(res);
      setLoading(false);
    };

    fetchApi();
  }, [debounce]);

  const handleHideResult = () => {
    setShowResult(false);
  };
  const handleShowResult = () => {
    setShowResult(true);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(" ")) {
      setSearchValue(searchValue);
    }
  };
  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      handleSubmit;
    }
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const handleDelete = () => {
    setSearchValue("");
    inputRef?.current?.focus();
  };
  const renderResult = (attrs: any) => {
    return (
      <div className={style.searchContainer} tabIndex='-1' {...attrs}>
        <PopperWrapper customClass={clsx("scrollbar", style.searchResult)}>
          {loading ? (
            <div className={style.searchTitle}>Tìm kiếm &apos;{searchValue}&apos;</div>
          ) : searchResult?.songs?.length > 0 ? (
            <div>
              <h2 className={style.resultTitle}>Gợi ý kết quả</h2>
              <div className={style.resultList}>
                {searchResult.artists.map(
                  (item, index) =>
                    !item.link.startsWith("/nghe-si") && <SuggestArtist key={`suggest-artist-${index}`} {...item} />,
                )}
                {searchResult.songs.map(
                  (item, index) =>
                    item.album && <SuggestItem key={`suggest-song-${item?.encodeId}-${index}`} {...item} />,
                )}
              </div>
            </div>
          ) : (
            searchValue.trim.length > 0 && (
              <div className={style.searchTitle}>Không có kết quả phù hợp. Hãy thử nhập từ khóa khác.</div>
            )
          )}
        </PopperWrapper>
      </div>
    );
  };
  return (
    // Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context.
    <div className={style.search}>
      <HeadlessTippy
        interactive
        offset={[0, 0]}
        visible={showResult}
        render={(attrs) => renderResult(attrs)}
        onClickOutside={handleHideResult}
      >
        <form className={style.form} onSubmit={handleSubmit} method='get'>
          <div className={style.container}>
            <input
              ref={inputRef}
              value={searchValue}
              onChange={handleChange}
              onKeyDown={handleEnter}
              onFocus={handleShowResult}
              className={clsx(style.input, { [style.inputWrapper]: searchValue })} // fix color input search
              type='text'
              placeholder='Tìm kiếm bài hát, nghệ sĩ, lời bài hát...'
            />
            <button type='submit' className={clsx(style.btn, style.btnSearch)}>
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
  );
};

export default HeaderSearch;
