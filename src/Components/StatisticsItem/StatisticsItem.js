import React from 'react';


import s from './Item.module.scss';

const StatisticsItem = ({ id, label, percentage }) => {
    return (
        <li key={id} className={s.item}>
            <div>
                <p className={s.label}>{label}</p>
                <p className={s.percentage}>{percentage}%</p>
            </div>
        </li >
    );
};



export default StatisticsItem;