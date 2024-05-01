//@ts-nocheck
import style from "./List.module.css";
import { ListInfo } from "../types/types";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function List({ jobs }: ListInfo) {
  const [jobsListWithFavorite, setJobsListWithFavorite] = useState(
    jobs.map((item) => {
      return { ...item, favorite: false };
    })
  );

  const handleToggleButton = (id, e) => {
    e.preventDefault();
    setJobsListWithFavorite((prevjob) =>
      prevjob.map((item) =>
        item.id === id ? { ...item, favorite: !item.favorite } : item
      )
    );
  };
  localStorage.setItem("favoriteJobs", JSON.stringify(jobsListWithFavorite));

  return (
    <ul className={style["card-list"]}>
      {" "}
      {jobsListWithFavorite.map((job) => (
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
                    icon={job.favorite ? solidStar : regularStar}
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
