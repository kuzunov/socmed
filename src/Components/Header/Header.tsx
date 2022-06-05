import * as React from 'react';
import Profile from '../Profile/Profile';
import "./Header.css"

 const Header = ({children}) => {
    return (
      <div className="app-header w-100 header">
        {children}
      </div>
    );
}
export default Header;
