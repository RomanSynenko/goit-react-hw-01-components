import React from "react";

import user from '../data/user.json';
import statisticalData from '../data/statisticData.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

import StatisticsForm from "./StatisticsForm";
import SocialProfile from "./SocialProfile";
import FriendsList from "./FriendsList";
import TransactionHistory from "./TransactionHistory";

import s from './ContainerStyle.module.scss'


const App = () => {
  return (
    <div className={s.container}>
      <SocialProfile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <StatisticsForm items={statisticalData} />
      <FriendsList items={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};

export default App;
