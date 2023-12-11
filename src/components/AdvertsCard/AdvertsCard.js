import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from 'components/Button/Button';
import CustomModal from 'components/Modal/CustomModal';
import Favorite from 'components/pages/Favorit';
import {
  Description,
  Image,
  Price,
  Title,
  Wrapper,
  WrapperImage,
  WrapperTitle,
} from './AdvertsCard.styled';
import { selectIsModalOpen } from 'components/redux/selectors';

const AdvertsCard = ({ adverts }) => {
  const dispatch = useDispatch();

  const isModalOpen = useSelector(selectIsModalOpen);

  const handleOpen = () => {
    dispatch(selectIsModalOpen(true));
  };

  const handleClose = () => {
    dispatch(selectIsModalOpen(false));
  };

  return (
    <>
      <ul>
        {adverts.map(advert => {
          return (
            <li key={advert.id}>
              <Wrapper>
                <WrapperImage>
                  <Favorite data={advert} />
                  <Image data={advert} />
                </WrapperImage>
                <WrapperTitle>
                  <Title>
                    {advert.make}{' '}
                    <span style={{ color: '#3470FF' }}>{advert.model}</span>,{' '}
                    {advert.year}
                  </Title>
                  <Price>{advert.rentalPrice}</Price>
                </WrapperTitle>
                <Description>
                  <li>{advert.address.split(',')[1]}</li>
                  <li>{advert.address.split(',')[2]}</li>
                  <li>{advert.rentalCompany}</li>
                  <li>{advert.type}</li>
                  <li>{advert.model}</li>
                  <li>{advert.mileage}</li>
                  <li>{advert.accessories[0]}</li>
                </Description>
                <Button text="Learn more" onClick={handleOpen} width="274px" />
                {isModalOpen && advert && (
                  <CustomModal
                    open={isModalOpen}
                    onClose={handleClose}
                    data={advert}
                  />
                )}
              </Wrapper>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default AdvertsCard;
