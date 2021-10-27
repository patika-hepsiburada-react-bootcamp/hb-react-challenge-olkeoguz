import './Filter.scss';

const Filter = ({ data, filterName }) => {
  let filterData = [];
  if (data) {
    filterData = Object.keys(data).map((key) => ({
      name: key,
      quantity: data[key],
    }));
  }

  console.log(filterData);

  return (
    <div className='filter'>
      <h3>{filterName}</h3>
      <ul>
        {filterData &&
          filterData.map((item, index) => (
            <li key={index}>
              <span>{item.name}</span> <span>({item.quantity})</span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Filter;
