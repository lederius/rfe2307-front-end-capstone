import React, { useState, useEffect} from 'react';

export default function Size ({currentStyle, userCart, setUserCart, openSize, trigger, menu}) {

  return (
    <div className="sizeContainer dropdown">
      {trigger}
      {openSize ? (
        <ul className="menu menuSize">
          {menu.map((menuItem, index) => (
            <li key={index} className="menu-item size-item">
              {menuItem}
            </li>
          ))}
        </ul>
      ) : null }
    </div>
  );
}