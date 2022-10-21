import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  let colorIsOnline = '';
  if (isOnline) {
    colorIsOnline = 'green';
  } else {
    colorIsOnline = 'red';
  }

  return (
    <li className={css.item}>
      <span
        className={css.status}
        style={{
          color: colorIsOnline,
        }}
      >
        &#9679;
      </span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};
