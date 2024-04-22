//@ts-nocheck
import style from "./CardList.module.css";
import { ListInfo } from "../types/types";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function List({ jobs }: ListInfo) {
  const [favoriteList, setFavoriteList] = useState([]);

  const handleToggleButton = (id, e) => {
    e.preventDefault();

    const findAdById = jobs.find((job) => job.id == id);

    const updatedAd2 = { ...findAdById, favorite: true };
    const updatedList = [...favoriteList, updatedAd2];
    setFavoriteList(updatedList);
    console.log(updatedList);

    // if (findAdById) {
    //   const removeFavorite = updatedList.filter(
    //     (job) => job.id !== findAdById.id
    //   );
    //   setFavoriteList(removeFavorite);
    // } else {
    //   setFavoriteList([...updatedList, findAdById]);
    // }
  };

  return (
    <ul className={style["card-list"]}>
      {" "}
      {jobs.map((job) => (
        <motion.div key={job.id} whileHover={{ scale: 1.2 }}>
          <li className={style.card}>
            <a href={job.source_links[0].url} target="_blank">
              <div className={style.headline}>
                <p className={style["card-title"]}>{job.headline}</p>
                <button
                  onClick={(e) => {
                    handleToggleButton(job.id, e);
                  }}
                  className={style["favorite-star"]}
                >
                  <FontAwesomeIcon
                    icon={
                      favoriteList.some(
                        (favoriteJob) => favoriteJob.id === job.id
                      )
                        ? solidStar
                        : regularStar
                    }
                  />
                </button>
              </div>
              <p className={style["card-brief"]}>{job.brief}</p>
              <div className={style["card-info"]}>
                <p>{job.workplace_addresses[0].municipality}</p>
                <p>{job.occupation_field.label}</p>
                <p className={style.employer}>{job.employer.name}</p>
              </div>
            </a>
          </li>
        </motion.div>
      ))}
    </ul>
  );
}

export default List;
