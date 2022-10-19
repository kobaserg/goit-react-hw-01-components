import css from './Profile.module.css';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={css.wrapper}>
      <div className={css.description}>
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.profile_link}>
          <span className={css.label}>Followers</span>
          <span className={css.quantty}>{stats.followers}</span>
        </li>
        <li className={css.profile_link}>
          <span className={css.label}>Views</span>
          <span className={css.quantty}>{stats.views}</span>
        </li>
        <li className={css.profile_link}>
          <span className={css.label}>Likes</span>
          <span className={css.quantty}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
