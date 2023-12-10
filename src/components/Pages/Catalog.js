import AdvertList from 'components/AdvertsList/AdvertsList';
import Button from 'components/Button/Button';
import { setCurrentPage } from 'components/redux/catalogSlice';
import { selectCurrentPage } from 'components/redux/selectors';
import { useDispatch, useSelector } from 'react-redux';

const Catalog = ({ data }) => {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);

  const itemsPerPage = 12;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedItems = data.slice(startIndex, endIndex);

  const totalPage = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = newPage => {
    dispatch(setCurrentPage(newPage));
  };

  return (
    <div>
      <AdvertList data={displayedItems} currentPage={currentPage} />
      <ul>
        {Array.from({ length: totalPage }, (_, index) => index + 1).map(
          page => (
            <li key={page}>
              <Button onClick={() => handlePageChange}>{page}</Button>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Catalog;
