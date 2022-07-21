import React from 'react';
import './Rightsidebar.css'
import Widgets from './Widgets'
import WidgetTags from "./WidgetTags"
const Rightsidebar = () => {
  return (
    <aside className='right-sidebar'>
      <Widgets />
      <WidgetTags />
    </aside>
  );
}

export default Rightsidebar;
