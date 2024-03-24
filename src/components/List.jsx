import style from "./CardList.module.css";

function List({ jobs }) {
  return (
    <ul className={style["card-list"]}>
      {jobs.map((job) => (
        <li className={style.card} key={job.id}>
          <h2 className={style["card-title"]}>{job.headline}</h2>
          <p className={style["card-brief"]}>{job.brief}</p>
          <div className={style["card-info"]}>
            <p>{job.workplace_addresses[0].municipality}</p>
            <p>{job.occupation_field.label}</p>
          </div>
          <p className={style.employer}>{job.employer.name}</p>
        </li>
      ))}
    </ul>
  );
}

export default List;
