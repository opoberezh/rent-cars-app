import {
  addToFavorite,
  removeFromFavorite,
} from 'components/redux/favoriteSlice';
import { useDispatch, useSelector } from 'react-redux';
import { IoHeartOutline, IoHeartSharp } from 'react-icons/io5';

export const FavoriteCards = ({ data }) => {
  const dispatch = useDispatch();

  const likedCars = useSelector(selectFavorites);

  const isChecked = likedCars.some(({ id }) => id === data.id);

  const handleToggleFavorite = () => {
    if (isChecked) {
      dispatch(removeFromFavorite(data));
    } else {
      dispatch(addToFavorite(data));
    }
  };

  return (
    <div style={{ position: 'absolute', top: '0', right: '0' }}>
      <Checkbox
        icon={
          <IoHeartOutline style={{ fill: '#FFFFFF', width: 18, height: 18 }} />
        }
        checkedIcon={
          <IoHeartSharp style={{ fill: '#3470FF', width: 18, height: 18 }} />
        }
        checked={isChecked}
        onChange={handleToggleFavorite}
      />
    </div>
  );
};
