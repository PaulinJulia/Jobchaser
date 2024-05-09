import style from "./List.module.css";
import { ListInfo, Job } from "../types/types";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import CardItem from "./CardItem";

function List({ jobs }: ListInfo) {
  const [jobsListWithFavorite, setJobsListWithFavorite] = useState<Job[]>(
    jobs.map((item) => {
      return { ...item, favorite: false };
    })
  );

  const onToggleButton = (id: string) => {
    const updatedJobsList = jobsListWithFavorite.map((item) =>
      item.id === id ? { ...item, favorite: !item.favorite } : item
    );
    setJobsListWithFavorite(updatedJobsList);
    localStorage.setItem("favoriteJobs", JSON.stringify(updatedJobsList));
  };

  useEffect(() => {
    try {
      const favoritesFromLocalStorage = localStorage.getItem("favoriteJobs");

      if (favoritesFromLocalStorage) {
        const favoriteData = JSON.parse(favoritesFromLocalStorage) as Job[];

        const updatedFavoriteData = jobsListWithFavorite.map((item1) => {
          const isFavorite = favoriteData.some(
            (item2) => item2.id === item1.id && item2.favorite == true
          );

          return { ...item1, favorite: isFavorite };
        });

        setJobsListWithFavorite(updatedFavoriteData);
      }
    } catch (error) {
      console.error("Error fetching favorite ads from localStorage", error);
    }
  }, []);

  return (
    <ul className={style["card-list"]}>
      {jobsListWithFavorite.map((ad) => (
        <motion.div key={ad.id} whileHover={{ scale: 1.2 }}>
          <CardItem key={ad.id} ad={ad} onToggleButton={onToggleButton} />
        </motion.div>
      ))}
    </ul>
  );
}

export default List;
