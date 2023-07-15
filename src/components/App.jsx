import friends from "./data/friends.json";
import FriendList from "../components/FriendList";
import { Fragment } from "react";

export default function App() {
  return (
    <Fragment>
      {friends.map((friend) => (
        <FriendList
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          key={friend.id}
        />
      ))}
    </Fragment>
  );
};
