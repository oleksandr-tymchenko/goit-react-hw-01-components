import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';



export default function FriendList ({data}) {
    return (
        <>
            {data.map(({id, isOline, avatar, name}) =>{
                return (
                    <FriendListItem
                        key={id}
                        avatarUrl={avatar}
                        status={isOline}
                        userName={name}
                    
                    />
                )
            })

            }
        </>
    )
}

FriendList.propTypes = {
        data: PropTypes.array  
};