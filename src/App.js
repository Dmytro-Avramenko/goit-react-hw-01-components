import { Profile } from './profile/Profile';
import user from '../src/data/user.json';

import { Statistics } from './statistics/Statistics'
import data from '../src/data/data.json';

import { FriendList } from './friends/FriendList';
import friends from '../src/data/friends.json';

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
            <h2>Task4</h2>            
        </div>
    );    
}


// import PaintingList from 'components/PaintingList';
// import paintings from '../src/user.json';

// export default function App() { 
//     return (
//         <div>
//             <PaintingList items={paintings}/>                    
//         </div>
//     );    
// }


// {users.map(user => <Painting
    // key={user.id}
//     username={user.name}
//     tag={user.tag}
//     location={user.location}
//     avatar={user.avatar}
//     statsfollowers={user.stats.followers}
//     statsviews={user.stats.views}
//     statsviews={user.stats.likes}
// /> )}

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
