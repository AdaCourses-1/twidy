export interface TabProps {
  label: string;
  value: string;
}

export interface TabListProps {
  tabList: TabProps[];
  children: React.ReactNode;
}
