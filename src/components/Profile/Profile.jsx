import css from './Profile.module.css';
import PropTypes from 'prop-types';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  const views = (stats.views / 1000).toLocaleString();
  
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
          <span className={css.quantty}>{views}</span>
        </li>
        <li className={css.profile_link}>
          <span className={css.label}>Likes</span>
          <span className={css.quantty}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};
