import React from 'react';
import clsx from 'clsx';
import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => (
  <table className={clsx(css.transactionsHistory)}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(item => (
        <tr>
          <td>{item.type}</td>
          <td>{item.amount}</td>
          <td>{item.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.array,
};
