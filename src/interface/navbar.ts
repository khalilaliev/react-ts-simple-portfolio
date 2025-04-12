export interface INavbarItem {
  title: string;
  path: string;
  element: React.ReactNode;
  isActive?: boolean;
}
