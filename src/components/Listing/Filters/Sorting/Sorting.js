import '../Filter/Filter.scss';

const Sorting = () => {
  return (
    <div className='filter'>
      <h3>Sorting</h3>
      <ul>
        <li>En Düşük Fiyat </li>
        <li>En Yüksek Fiyat </li>
        <li>En Yeniler (A{'>'}Z ) </li>
        <li>En Yeniler (Z{'>'}A ) </li>
      </ul>
    </div>
  );
};

export default Sorting;
