import './Filter.scss';

const Filter = ({ filter }) => {
  return (
    <div className='filter'>
      <h3>{filter.filterName}</h3>
      <ul>
        {filter.data.map((item, index) => (
          <li key={index}>
            <span>{item.name}</span>
            {" "}
            <span>({item.quantity})</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
