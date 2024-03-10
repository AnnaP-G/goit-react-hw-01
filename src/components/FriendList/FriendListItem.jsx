import css from "../FriendList/FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.friendItem}>
      <img className={css.friendAvatar} src={avatar} alt="Avatar" width="48" />
      <p className={css.friendName}>{name}</p>
      <p className={css.friendStatus}>{isOnline}</p>
    </li>
  );
};

export default FriendListItem;