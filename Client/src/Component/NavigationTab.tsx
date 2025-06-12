import { FaBook, FaDashcube, FaHome, FaPhone } from 'react-icons/fa';
import { FaPerson } from 'react-icons/fa6';
import {  NavLink } from 'react-router-dom';
import { Tab, Tabs, TabList } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const NavigationTab = () => {
  return (
    <Tabs>
      <TabList>
        <Tab><NavLink to='/' ><FaHome /> Home</NavLink ></Tab>
        <Tab ><NavLink to='/allBooks' > <FaBook /> All Books</NavLink ></Tab>
        <Tab ><NavLink to='/' ><FaPerson /> About Us</NavLink ></Tab>
        <Tab ><NavLink to='/' ><FaPhone /> Contact Us</NavLink ></Tab>
        <Tab ><NavLink to='/' ><FaDashcube /> Dashboard</NavLink ></Tab>
       
      </TabList>
    </Tabs>
  );
};

export default NavigationTab;