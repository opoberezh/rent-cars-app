import { fetchAdverts, useSelector } from 'components/redux/operations';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const selectIsLoading = (state) => state.adverts.isLoading;  
const selectError = (state) => state.adverts.error;  

const AdvertCard = ({ data }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    const img = new Image();
    img.src = data.img;

    const handleImageLoad = () => {
      dispatch(fetchAdverts());
    };

    const handleImageError = () => {
      isLoading(false);
      error(true);
    };

   
    img.onload = handleImageLoad;
    img.onerror = handleImageError;

   
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [data.img, dispatch]);

  return (
    <>
      {error ? (
        <ImageCar src={CarLoading} alt="Error Loading Image Car" />
      ) : (
        isLoading && <ImageCar src={data.img} alt="Car" />
      )}
    </>
  );
};

export default AdvertCard;
