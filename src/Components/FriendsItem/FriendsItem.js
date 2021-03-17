import React from 'react';

import s from './Item.module.scss';
import defaultImage from '../defaultImage.jpeg';

const FriendsItem = ({ avatar, name, isOnline, id }) => {
    const statusOnline = isOnline ? s.onLine : s.offLine;
    return (
        <li key={id} className={s.item}>
            <span className={statusOnline}></span>
            <img className={s.avatar} src={avatar} alt={name} width="48" />
            <p className={s.name}>{name}</p>
        </li>
    )
};
FriendsItem.defaultProps = {
    avatar: defaultImage,
}
export default FriendsItem;