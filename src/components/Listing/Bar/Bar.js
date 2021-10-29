import React from 'react';
import Button from '../../UI/Button/Button';
import ArrowDown from '../../../assets/icons/ArrowDown.svg';
import './Bar.scss';
import { useFilters } from '../../../contexts/FiltersContext';
import { sortingOptions } from '../Filters/Sorting/Sorting';
import Done from '../../../assets/icons/Done.svg';

const Bar = () => {
  const { filters, setFilters } = useFilters();

  const changeSortingHandler = (sort) => {
    setFilters((prev) => ({ ...prev, sort }));
  };

  return (
    <div className='bar'>
      <div className='searched-item-container'>
        <p className='title'>Cep telefonu</p>
        {filters.search.length > 2 && (
          <p className='searched-word'>
            Aranan Kelime: <span>{decodeURI(filters.search)}</span>
          </p>
        )}
      </div>
      <div className='sorting'>
        <Button text='Sıralama' iconSrc={ArrowDown} />
        <div className='sorting-options'>
          {sortingOptions.map((option, index) => (
            <div key={index} onClick={() => changeSortingHandler(option.name)}>
              <img
                src={Done}
                className={option.name === filters.sort ? 'selected' : ''}
                alt='asdsd'
                width={20}
              />
              <span>{option.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bar;
