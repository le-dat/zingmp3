import React, { useEffect } from "react";

import { useAuthContext } from "../../auth/AuthProvider";
import { CardAlbum } from "../../components/Card";
import { useScrollTop } from "../../hooks";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { setPlayListLikedAlbum } from "../../redux/reducers/personalSlice";
import * as services from "../../services";
import Empty from "./Empty";

const PersonalPlayList: React.FC = () => {
  useScrollTop();
  const dispatch = useAppDispatch();
  const { currentUser } = useAuthContext();
  const { playListLikedAlbum } = useAppSelector((state) => state.personal);

  useEffect(() => {
    const fetchData = async () => {
      const res = await services.getLikedAlbum(currentUser.email);
      return res.album ? dispatch(setPlayListLikedAlbum(res.album)) : dispatch(setPlayListLikedAlbum([]));
    };

    if (currentUser) fetchData();
  }, [currentUser]);

  return (
    <div>
      {playListLikedAlbum.length > 0 ? (
        <div className='grid'>
          <div className='row'>
            {playListLikedAlbum.map((item, index) => (
              <div key={`album-user-${index}`} className='col l-2-4 m-3 c-4'>
                <CardAlbum
                  encodeId={item.encodeId}
                  title={item.title}
                  thumbnailM={item.thumbnailM}
                  subTitle={item.releaseDate}
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Empty />
      )}
    </div>
  );
};

export default PersonalPlayList;
