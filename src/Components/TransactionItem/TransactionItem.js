import React from 'react';

import s from './Item.module.scss';

const TransactionItem = ({ id, type, amount, currency }) => {
    return (
        <tr className={s.wrapper} key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </tr>
    )
};
export default TransactionItem;