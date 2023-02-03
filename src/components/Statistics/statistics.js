import React from 'react';
import clsx from 'clsx';
import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => (
  <section className={clsx(css.statistics)}>
    {title && <h2 className={clsx(css.title)}>{title}</h2>}

    <ul className={clsx(css.statList)}>
      {stats.map(stat => (
        <li key={stat.id} className={clsx(css.item)}>
          <span className={clsx(css.label)}>{stat.label}</span>
          <span className={clsx(css.percentage)}>{stat.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
