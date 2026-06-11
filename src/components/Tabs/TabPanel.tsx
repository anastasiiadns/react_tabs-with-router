import { Tab } from '../../types/Tab';
import React from 'react';

interface Props {
  selectedTab?: Tab;
}

export const TabPanel: React.FC<Props> = ({ selectedTab }) => (
  <div className="block" data-cy="TabContent">
    {selectedTab ? selectedTab.content : 'Please select a tab'}
  </div>
);
