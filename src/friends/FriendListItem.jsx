import css from './FriendListItem.module.css';
import { StyledStatus } from './FriendListItemStyled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <StyledStatus isOnline={isOnline}></StyledStatus>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};