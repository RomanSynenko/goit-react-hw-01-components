import React from 'react';

import StatisticsItem from '../StatisticsItem/StatisticsItem';

import s from './List.module.scss'

const StatisticsList = ({ items }) => {
    return <ul className={s.statList}>{items.map(StatisticsItem)}</ul>
}
export default StatisticsList;