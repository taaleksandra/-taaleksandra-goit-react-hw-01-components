import React from 'react';
import clsx from 'clsx';
import css from './Profile.module.css';
import PropTypes from 'prop-types';

export const Profile = ({ username, tag, location, avatar, stats }) => (
  <div className={clsx(css.profile)}>
    <div className={clsx(css.description)}>
      <img src={avatar} alt="User avatar" className={clsx(css.avatar)} />
      <p className={clsx(css.name)}>{username}</p>
      <p className={clsx(css.tag)}>@{tag}</p>
      <p className={clsx(css.location)}>{location}</p>
    </div>
    <ul className={clsx(css.stats)}>
      <li>
        <span className={clsx(css.label)}>Followers</span>
        <span className={clsx(css.quantity)}>{stats.followers}</span>
      </li>
      <li>
        <span className={clsx(css.label)}>Views</span>
        <span className={clsx(css.quantity)}>{stats.views}</span>
      </li>
      <li>
        <span className={clsx(css.label)}>Likes</span>
        <span className={clsx(css.quantity)}>{stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};
