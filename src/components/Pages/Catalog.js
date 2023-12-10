import AdvertList from 'components/AdvertsList/AdvertsList';
import { setCurrentPage } from '../redux/catalogSlice';
import { selectCurrentPage } from 'components/redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import CustomButton from 'components/Button/Button';

const Catalog = ({ data }) => {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);

  const itemsPerPage = 12;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedItems = data.slice(startIndex, endIndex);

  const totalPage = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <div>
      <AdvertList data={displayedItems} currentPage={currentPage} />
      <ul>
        {Array.from({ length: totalPage }, (_, index) => index + 1).map(
          page => (
            <li key={page}>
              <CustomButton onClick={() => handlePageChange(page)}>{page}</CustomButton>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Catalog;
