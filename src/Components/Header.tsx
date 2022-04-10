import * as React from 'react';
import Profile from './Profile/Profile';

 const Header = ({children}) => {
    return (
      <div className="app-header">
        {children}
      </div>
    );
}
export default Header;
