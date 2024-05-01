//@ts-nocheck
import style from "./List.module.css";
import { ListInfo } from "../types/types";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function List({ jobs }: ListInfo) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [star, setStar] = useState(false);
  const [favoriteList, setFavoriteList] = useState([]);

  //Lagt på egenskapen favorite på objektet
  const jobsWithFavorite = jobs.map((item) => {
    return { ...item, favorite: isFavorite };
  });
  //console.log(jobsWithFavorite);

  const handleToggleButton = (id, e) => {
    e.preventDefault();

    const findAdById = jobsWithFavorite.find((item) => item.id == id);
    //console.log(findAdById);
    const favoriteJob = { ...findAdById, favorite: !isFavorite };
    //console.log(favoriteJob);

    const updatedList = [...favoriteList, favoriteJob];
    setFavoriteList(updatedList);
    console.log(updatedList);

    // if (!checkFavoriteList) {
    //   updatedList.push(findAdById);
    // }

    // const isAnyFavorite = jobsListWithFavorite.some((job) => job.favorite);
    setStar(() => !star);
    localStorage.setItem("favoriteJobs", JSON.stringify(updatedList));
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
                  <FontAwesomeIcon icon={star ? solidStar : regularStar} />
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
