import React from 'react';
import PropTypes from 'prop-types';

import StatisticsList from "../StatisticsList/StatisticsList";

import s from './Statistics.module.scss'

const StatisticsForm = ({ items }) => {
    if (items.length === 0) return null
    return (
        <section className={s.statistics}>
            <div className={s.titleContainer}>
                <h2 className={s.title}>Upload stats</h2>
            </div>
            <StatisticsList items={items} />
        </section >
    )
}

StatisticsForm.propType = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ).isRequired,

}
export default StatisticsForm;