import PropTypes from 'prop-types';
import css from './Profile.module.css';

export const Profile = (props) => {
    const { 
      username,
      tag,
      location = 'невідомо',
      avatar,
      statsfollowers,
      statsviews,
      statslikes
    } = props; 

  return (
    <div className={css.profile}>
      <div className={css.description}>
       <img
          src={avatar}
          alt={username}
          className={css.avatar}
        />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className={css.label}>Followers</span>
          <span className={css.label}> {statsfollowers}</span>
        </li>
        <li>
          <span className={css.label}>Views</span>
          <span className={css.label}> {statsviews}</span>
        </li>
        <li>
          <span className={css.label}>Likes</span>
          <span className={css.label}> {statslikes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  statsfollowers: PropTypes.number.isRequired,
  statsviews: PropTypes.number.isRequired, 
  statslikes: PropTypes.number.isRequired, 
}