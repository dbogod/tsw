import React from 'react';

const ColourWrapper = ({ classNames, colours, children }) => {
  return (
    <div className={`[ ${classNames} ]`}
         style={
           {
             backgroundColor: colours.bgColour ?? '',
             color: colours.whiteText ? '#fff' : '',
             '--link-color': colours.whiteText ? '#fff' : ''
           }
         }
    >
      {children}
    </div>
  )
}

export default ColourWrapper;