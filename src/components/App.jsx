import FriendUL from "./FriendList/FriendUL";
import friends from "./data/friends.json";

import Profile from "./Profile/Profile";
import user from "./data/user.json";

import Statistics from "./Statistics/Statistics";
import data from '../components/data/data.json';

import transactions from './data/transactions.json';
import TransactionHistoryTable from './TransactionHistory/TransactionHistoryTable';


import { Fragment } from "react";

export default function App() {
  return (
    <Fragment>
        <FriendUL items={friends} />
    
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
      />

        <Statistics
        title="Upload stats" stats={data}
      />

      
        <TransactionHistoryTable items={transactions} />
      
    </Fragment>
  );
};
