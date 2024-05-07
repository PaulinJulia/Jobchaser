import style from "./CardItem.module.css";
import { CardItemProps } from "../types/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";

function CardItem({ ad, onToggleButton }: CardItemProps) {
  const handleToggleButton = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    onToggleButton(ad.id);
  };

  return (
    <>
      <li className={style.card}>
        <a href={ad.source_links[0].url} target="_blank">
          <div className={style.headline}>
            <p className={style["card-title"]}>{ad.headline}</p>
            <button
              onClick={handleToggleButton}
              className={style["favorite-star"]}
            >
              <FontAwesomeIcon icon={ad.favorite ? solidStar : regularStar} />
            </button>
          </div>
          <p className={style["card-brief"]}>{ad.brief}</p>
          <div className={style["card-info"]}>
            <p>{ad.workplace_addresses[0].municipality}</p>
            <p>{ad.occupation_field.label}</p>
            <p className={style.employer}>{ad.employer.name}</p>
          </div>
        </a>
      </li>
    </>
  );
}

export default CardItem;
