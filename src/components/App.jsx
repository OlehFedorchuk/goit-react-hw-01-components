import FriendList from "../components/FriendList";
import friends from "./data/friends.json";

import Profile from "../components/Profile";
import user from "./data/user.json";

import Statistics from "./Statistics";
import data from '../components/data/data.json';

import TransactionHistory from '../components/TransactionHistory';
import transactions from './data/transactions.json';

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
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}

      />
        <Statistics
        title="Upload stats" stats={data}
        statsD={data}
        
      />

        {transactions.map((transaction) =>(
          <TransactionHistory
      
           key={transaction.id}
           type={transaction.type}
           amount={transaction.amount}
           currency={transaction.currency}
            />  
          ))}
    </Fragment>
  );
};
