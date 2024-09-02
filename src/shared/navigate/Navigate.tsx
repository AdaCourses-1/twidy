import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { TabListProps, TabProps } from './types';

const TabNavigation = (props: TabListProps) => {
  const { tabList } = props;
  const [activeTab, setActiveTab] = useState(tabList[0]);

  const handleTabChange = (newTab: TabProps) => setActiveTab(newTab);
  const classes = 'text-[#8C8CB6] hover:text-[#4E3F6F] font-bold text-2xl relative inline-block';

  return (
    <div className="mt-12 ml-12">
      <Tabs value={activeTab.value}>
        <TabsList className="gap-4 ml-6 !bg-[transparent]">
          {tabList.map((tab) => (
            <TabsTrigger
              className={cn(
                classes,
                tab.value === activeTab.value
                  ? '!text-[#4E3F6F] !bg-[transparent] !shadow-none !border-none'
                  : ''
              )}
              value={tab.value}
              onClick={() => handleTabChange(tab)}
            >
              <div className="relative flex flex-col items-center">
                {tab.label}
                <div
                  className={cn(
                    'h-[5px] bg-[#615DFA] transition-transform duration-300 rounded-lg',
                    tab.value === activeTab.value ? 'w-full' : 'w-0'
                  )}
                />
              </div>
            </TabsTrigger>
          ))}
        </TabsList>
        {tabList.map((tab) => (
          <TabsContent value={tab.value} key={tab.value}>
            {tab.content}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default TabNavigation;
