
import FriendList from './FriendList/FriendList';
import friends from './FriendList/friends.json';
import Profile from './Profile/Profile';
import Statistics from './Statictics/Statistics';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from './TransactionHistory/transactions.json';
import data from './Statictics/data.json'

import { Container } from './App.styled';


export const App = () => {
  return (
    <Container>
      

      <Profile />
      <Statistics stats={ data} />
      <FriendList data={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
};
