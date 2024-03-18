import style from "./CardList.module.css";

function List({ jobs }) {
  return (
    <ul>
      {jobs.map((job) => (
        <li className={style.card} key={job.id}>
          <h2 className={style.title}>{job.headline}</h2>
          <div className={style.info}>
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
