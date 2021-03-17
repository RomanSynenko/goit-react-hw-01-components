import React from 'react';
import PropTypes from 'prop-types'

import TransactionItem from '../TransactionItem/TransactionItem';

import s from './History.module.scss';

const TransactionHistory = ({ transactions }) => {
    return (
        <table className={s.transactionHistory}>
            <thead className={s.tableHead}>
                <tr className={s.tabbleRow}>
                    <th className={s.tableColum}>Type</th>
                    <th className={s.tableColum}>Amount</th>
                    <th className={s.tableColum}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {transactions.map(TransactionItem)}
            </tbody>
        </table>
    )
};
TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            amount: PropTypes.number.isRequired,
            type: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ).isRequired,
};
export default TransactionHistory;