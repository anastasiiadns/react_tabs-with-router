import React from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';

const tabs = [
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

      <Tabs className="tabs is-boxed">
        <TabList>
          {tabs.map(tab => (
            <Tab
              key={tab.id}
              data-cy="Tab"
              className={classNames({ 'is-active': tab.id === tabId })}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </Tab>
          ))}
        </TabList>
      </Tabs>

      <TabPanel className="block" data-cy="TabContent">
        {selectedTab ? selectedTab.content : 'Please select a tab'}
      </TabPanel>
    </div>
  );
};
