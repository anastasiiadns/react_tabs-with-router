import { Link } from 'react-router-dom';
import React from 'react';
import classNames from 'classnames';
import { Tab as TabType } from '../../types/Tab';

interface Props {
  tab: TabType;
  isActive: boolean;
}

export const Tab: React.FC<Props> = ({ tab, isActive }) => (
  <li
    key={tab.id}
    className={classNames({ 'is-active': isActive })}
    data-cy="Tab"
  >
    <Link to={`/tabs/${tab.id}`} data-cy="TabLink">
      {tab.title}
    </Link>
  </li>
);
