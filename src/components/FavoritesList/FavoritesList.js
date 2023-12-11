import { useSelector } from 'react-redux';
import {
    selectFavorites,
    selectTotalFavorites,
} from '../redux/selectors';
import AdvertsCard from 'components/AdvertsCard/AdvertsCard';

export const FavoritesList = () => {
  const favoriteAdverts = useSelector(selectFavorites);
  const totalFavorites = useSelector(selectTotalFavorites);
  
  console.log(totalFavorites);

  
  const cardsPerLine = [5, 6, 7, 9, 10, 11];
  const isCardsPerLine = cardsPerLine.includes(totalFavorites);

  return (
    <>
      <ul
        className={`mb-[100px] pt-[20px] md:pt-[50px]  flex justify-center gap-[16px] sm:gap-[16px] mx-auto ${
          isCardsPerLine ? 'md:justify-start' : 'md:justify-center'
        }  md:items-center flex-wrap md:gap-[29px]`}
      >
        {favoriteAdverts.map((data) => {
          const { id } = data;

          return (
            <li key={id}>
              <AdvertsCard data={data} />
            </li>
          );
        })}
      </ul>
    </>
  );
};