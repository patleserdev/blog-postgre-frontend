import Image from "next/image.js";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as moment from "moment";
import "moment/locale/fr";

export default function CommentsListByPost({ post }) {
  moment.locale("fr");

  const reload = useSelector((state) => state.reloader.value);
  const [comments, setComments] = useState([]);

  // const BACKEND_URL = "http://localhost:3000";
  const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

  const getComments = async () => {
    const response = await fetch(
      `${BACKEND_URL}/comments/bypostandusername/${post}`
    );

    const result = await response.json();
    // console.log(result)
    if (result) {
      setComments(result.data);
    }
  };
  useEffect(() => {
    getComments();
  }, [reload]);

  return (
    <div>
      {comments == undefined && (
        <p>
          <i> Aucun commentaire</i>
        </p>
      )}
      {comments && (
        <p>
          <i> {comments.length} commentaire{comments.length > 1 ? 's' : null}</i>
        </p>
      )}
      {comments &&
        comments.map((comment, i) => {
          return (
            <div
              key={i}
              className="border my-1 p-2 flex md:flex-row items-center justify-start"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-center">
                <h3 className="capitalize px-2">
                  <b>{decodeURI(comment.username)}</b>
                </h3>

                <Image
                  src="/assets/avatar/perso1.png"
                  alt="avatar"
                  width={50}
                  height={50}
                ></Image>
              </div>

              <div className="px-5">
                <h3 className="capitalize">
                  <b>{decodeURI(comment.title)}</b>
                </h3>
                <p>{decodeURI(comment.content)}</p>
                <i>
                  {moment(comment.timestamp).format(
                    "dddd, Do MMMM YYYY, H:mm:ss"
                  )}
                </i>
              </div>
            </div>
          );
        })}
    </div>
  );
}
