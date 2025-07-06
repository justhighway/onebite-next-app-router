import SearchBar from '@/components/SearchBar';
import { ReactNode } from 'react';

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <SearchBar />
      {children}
    </>
  );
};
export default layout;
