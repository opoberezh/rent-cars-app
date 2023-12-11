import { useEffect } from 'react';
import {
  selectAdverts,
  selectError,
  selectIsLoading,
} from '../redux/selectors';
import { setCurrentPage } from 'components/redux/catalogSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdverts } from '../redux/operations';
import AdvertsCard from 'components/AdvertsCard/AdvertsCard';
import { Filter } from 'components/Filter/Filter';
import BasicButtons from 'components/Button/Button';

const Catalog = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const adverts = useSelector(selectAdverts);

  const totalItems = adverts.length;
  const itemsPerPage = 12;
  const totalPage = Math.ceil(totalItems / itemsPerPage);

  useEffect(() => {
    dispatch(fetchAdverts({ page: 1, pageSize: itemsPerPage }));
  }, [dispatch, itemsPerPage]);

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <>
      <Filter />
      <AdvertsCard items={adverts}/>
      {isLoading && !error && <b>Request in progress...</b>}
      <ul>
        {Array.from({ length: totalPage }, (_, index) => index + 1).map(
          page => (
            <li key={page}>
              <BasicButtons onClick={() => handlePageChange(page)}>
                {page}
              </BasicButtons>
            </li>
          )
        )}
      </ul>
    </>
  );
};

export default Catalog;
