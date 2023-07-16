import Style from './FriendUL.module.css';

export default function FriendList({ avatar, name, isOnline, id }) {
  const listItemsClassName = isOnline ? `${Style.item} ${Style.online}`:`${Style.item} ${Style.offline}`;
  return (
    < li key={id} className={Style.item}>
      <span className={listItemsClassName}>{isOnline}</span>
      <img className={Style.avatar} src={avatar} alt=" User avatar" width="48" />
      <p className={Style.name}>{name}</p>
    </li>
  );
}


