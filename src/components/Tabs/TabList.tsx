import { Tab as TabType } from '../../types/Tab';
import React from 'react';
import { Tab } from './Tab';

interface Props {
  tabs: TabType[];
  selectedTabId?: string;
}

export const TabList: React.FC<Props> = ({ tabs, selectedTabId }) => (
  <div className="tabs is-boxed">
    <ul>
      {tabs.map(tab => (
        <Tab key={tab.id} tab={tab} isActive={tab.id === selectedTabId} />
      ))}
    </ul>
  </div>
);
