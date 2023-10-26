import { useParams } from 'react-router-dom';
import { TabItem } from './TabItem';
import tabs from './data/tabs.json';
import DummyTable from './components/DummyTable';
import DummyChart from './components/DummyChart';
import DummyList from './components/DummyList';

export const TabsPage = () => {
  const { tabId } = useParams();
  const selectedTab = tabs.find(tab => tab.id === tabId);
  
  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <TabItem
              key={tab.id}
              tab={tab}
            />
          ))}
        </ul>
      </div>
      <div className="block">
        {!selectedTab?.id && (<h1 className='title is-5'>Select tab</h1>)}
        { selectedTab?.id === "dummyTable" && <DummyTable /> }
        { selectedTab?.id === "dummyChart" && <DummyChart /> }
        { selectedTab?.id === "dummyList" && <DummyList /> }
      </div>

    </>
  );
};
