import React, { useEffect } from "react";

import { useAuthContext } from "../../auth/AuthProvider";
import Media from "../../components/Media";
import { useScrollTop } from "../../hooks";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { setPlayListLikedSong } from "../../redux/reducers/personalSlice";
import * as services from "../../services";
import Empty from "./Empty";

const PersonalSong: React.FC = () => {
  useScrollTop();
  const dispatch = useAppDispatch();
  const { playListLikedSong } = useAppSelector((state) => state.personal);
  const { currentUser } = useAuthContext();

  useEffect(() => {
    const fetchData = async () => {
      const res = await services.getLikedSong(currentUser.email);
      return res.songs ? dispatch(setPlayListLikedSong(res.songs)) : dispatch(setPlayListLikedSong([]));
    };

    if (currentUser) fetchData();
  }, [currentUser]);

  return (
    <div>
      {playListLikedSong.length > 0 ? (
        playListLikedSong.map((item, index) => (
          <div key={`song-user-${index}`}>
            <Media {...item} iconKaraoke iconHeart iconThreeDots />
          </div>
        ))
      ) : (
        <Empty />
      )}
    </div>
  );
};

export default PersonalSong;
