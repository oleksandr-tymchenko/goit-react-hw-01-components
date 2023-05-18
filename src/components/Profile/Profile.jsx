import user from './user.json'

import ProfileStats from "./ProfileStats";
import ProfileDescription from './ProfileDescription';

// import { Card } from './Profile.styled';

export default function Profile (props) {
  console.log(props);
    return (
        <div >
            
            <ProfileDescription
                username={user.username}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
            />
        {/* const {stats = {followers, views, likes}} = user; */}
            <ProfileStats
                stats={user.stats}
            />
        </div>)
}