import React from 'react';
import PropTypes from 'prop-types';
const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  
  let className = '';
      if(props.selectedTab === props.tab) {
     className = 'tab active-tab'
        
  } else {
    className = 'tab'
  }
  console.log(props.tab)

  return (
   
    <div
      className={className}
      onClick={() => {
        /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
         props.selectTabHandler(props.tab);
      }
    }
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.


export default Tab;


Tab.propTypes = {
  tab: PropTypes.string,
};