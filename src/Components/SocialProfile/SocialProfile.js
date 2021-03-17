import React from 'react';
import PropTypes from 'prop-types';

import StatsProfile from '../SocialStats/SocialStats'

import s from './Social.module.scss';
import defaultImage from '../defaultImage.jpeg';

const SocialProfile = ({ name, tag, location, avatar, stats }) => {
    return (
        <div className={s.profile} >
            <div className={s.description}>
                <img src={avatar} alt="Аватар пользователя" className={s.avatar} width='150' />
                <p className={s.name}>{name}</p>
                <p className={s.tag}>@{tag}</p>
                <p className={s.location}>{location}</p>
            </div>
            <StatsProfile {...stats} />
        </div>
    )
}
SocialProfile.defaultProps = {
    avatar: defaultImage,
}

SocialProfile.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number).isRequired,
};
export default SocialProfile;