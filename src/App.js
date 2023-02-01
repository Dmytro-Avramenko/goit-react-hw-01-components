import { Profile } from './profile/Profile';
import user from '../src/data/user.json';

import { Statistics } from './statistics/Statistics'
import data from '../src/data/data.json';

import { FriendList } from './friends/FriendList';
import friends from '../src/data/friends.json';

import { TransactionHistory } from './transaction/TransactionHistory';
import transactions from '../src/data/transactions.json';

export default function App() { 
    return (
        <div>
            <h2>Profile</h2>
            <Profile
                username={user.username}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                statsfollowers={user.stats.followers}
                statsviews={user.stats.views}
                statslikes={user.stats.likes}
            />
            <h2>Statistics</h2>
            <Statistics title="Upload stats" stats={data} />
            <h2>Friends</h2>
            <FriendList friends={friends} />           
            <h2>Transaction</h2>
            <TransactionHistory items={transactions} />            
        </div>
    );    
}