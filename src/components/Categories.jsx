import React from 'react';

import '../assets/styles/components/categories.scss';

const Categories = ({ children, tittle }) => (
  <div className='categories'>
    <h3 className='categories__title'>{tittle}</h3>
    {children}
  </div>
);

export default Categories;
