import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';



export default function FriendList ({data}) {
    return (
        <>
            {data.map(({id, isOnline, avatar, name}) =>{
                return (
                    <FriendListItem
                        key={id}
                        avatarUrl={avatar}
                        status={isOnline}
                        userName={name}
                    
                    />
                ) })

            }
        </>
    )
}

FriendList.propTypes = {
        data: PropTypes.array  
};