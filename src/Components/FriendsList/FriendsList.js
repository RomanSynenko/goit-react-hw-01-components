import React from 'react';
import PropTypes from 'prop-types';

import FriendsItem from '../FriendsItem/FriendsItem';

import s from './Friends.module.scss';

const FriendsList = ({ items }) => {
    if (items.length === 0) return null;
    return (
        <ul className={s.friendList}>{items.map(FriendsItem)}</ul>
    )
};
FriendsList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string,
            name: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        })
    ).isRequired,
};
export default FriendsList;