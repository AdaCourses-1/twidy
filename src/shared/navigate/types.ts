export interface TabProps {
  label: string;
  value: string;
  content: React.ReactNode;
}

export interface TabListProps {
  tabList: TabProps[];
}