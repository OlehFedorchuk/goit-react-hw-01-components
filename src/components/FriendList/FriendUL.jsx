import FriendList from "./FriendList";
import PropTypes from "prop-types";


export default function FriendUL({ items }) {
    return (<ul className="friend-list">
        {items.map(item => (
            <FriendList
                
          avatar={item.avatar}
          name={item.name}
          isOnline={item.isOnline}
          key={item.id}
        />
        ))}
       
</ul>);
}
FriendList.propTypes = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.number,
};