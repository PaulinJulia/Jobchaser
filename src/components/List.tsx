import style from "./CardList.module.css";
import { ListInfo } from "../types/types";
import { motion } from "framer-motion";

function List({ jobs }: ListInfo) {
  return (
    <ul className={style["card-list"]}>
      {" "}
      {jobs.map((job) => (
        <motion.div
          key={job.id}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
        >
          <li className={style.card}>
            <a href={job.source_links[0].url} target="_blank">
              <p className={style["card-title"]}>{job.headline}</p>
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
