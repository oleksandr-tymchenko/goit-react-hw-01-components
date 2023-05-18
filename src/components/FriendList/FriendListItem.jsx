import PropTypes from 'prop-types';


export default function FriendListItem({avatarUrl, userName, status}) {
    return (
        
    <li className="item">
            <span className={status}></span>
        <img className="avatar" src={avatarUrl} alt={userName} width="48" />
        <p className="name">{userName}</p>
    </li>
    )
}

FriendListItem.propTypes = {
  id: PropTypes.number,
  avatarUrl: PropTypes.string,
  userName: PropTypes.string,
  status: PropTypes.bool,
};