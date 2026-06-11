import React from 'react';
import { useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';
import { TabList } from '../components/Tabs/TabList';
import { TabPanel } from '../components/Tabs/TabPanel';

export const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage: React.FC = () => {
  const { tabId } = useParams();
  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <div className="container">
      <h1 className="title">Tabs page</h1>

      <TabList tabs={tabs} selectedTabId={tabId} />
      <TabPanel selectedTab={selectedTab} />
    </div>
  );
};
