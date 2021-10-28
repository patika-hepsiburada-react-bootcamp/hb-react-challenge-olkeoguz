import { useFilters } from '../../../../contexts/FiltersContext';
import '../Filter/Filter.scss';

const sortingOptions = [
  { name: 'Ascending', text: 'En Düşük Fiyat' },
  { name: 'Descending', text: 'En Yüksek Fiyat' },
  { name: 'alpha', text: 'En Yeniler A>Z' },
  { name: 'nonalpha', text: 'En Yeniler Z>A' },
];

const Sorting = () => {
  const { filters, setFilters } = useFilters();

  const changeSorting = (sort) => {
    setFilters((prev) => ({ ...prev, sort }));
  };

  return (
    <div className='filter'>
      <h3>Sorting</h3>
      <ul>
        {sortingOptions.map((option) => (
          <li
            onClick={() => changeSorting(option.name)}
            key={option.name}
            className={filters.sort === option.name ? 'selected' : ''}
          >
            {option.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sorting;
