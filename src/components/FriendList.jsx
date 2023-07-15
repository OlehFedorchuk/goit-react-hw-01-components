// import PropTypes from "prop-types";

export default function FriendList({ avatar, name, isOnline, id }) {
  return (
    <li key={id} className="item">
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt=" User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

// Friends.propTypes = {
//   isOnline: PropTypes.bool,
//   avatar: PropTypes.string,
//   name: PropTypes.string,
//   id: PropTypes.number,
// };
