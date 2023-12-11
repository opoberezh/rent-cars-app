import { useSelector } from 'react-redux';

import { selectTotalFavorites } from '../redux/selectors';
import { FavoritesList } from '../FavoritesList/FavoritesList';

const Favorites = () => {
  const totalFavorites = useSelector(selectTotalFavorites);

  return (
    <section className="pb-[100px] md:pt-[100px] md:max-w-[1280px] md:min-h-[calc(100vh-132px)] md:px-[16px] mx-auto">
      {totalFavorites > 0 ? (
        <FavoritesList />
      ) : (
        <div className="w-full h-full flex">
          <h2 className="m-auto text-center text-2xl text-darkFontColor dark:text-white">
            There are no adverts yet
          </h2>
        </div>
      )}
    </section>
  );
};

export default Favorites;
