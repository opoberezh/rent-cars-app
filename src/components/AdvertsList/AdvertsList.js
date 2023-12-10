import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectDisplayedItems, selectIsModalOpen, selectSelectedAdvert, setDisplayedItems, setIsModalOpen, setSelectedAdvert } from 'ваш-шлях-до-редуктора';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import Favorite from 'components/pages/Favorit';
import { Price, Wrapper, WrapperTitle } from './AdvertsList.styled';

const AdvertList = ({ data }) => {
  const dispatch = useDispatch();
  const displayedItems = useSelector(selectDisplayedItems);
  const isModalOpen = useSelector(selectIsModalOpen);
  const selectedAdvert = useSelector(selectSelectedAdvert);

  const handleOpen = () => {
    dispatch(setIsModalOpen(true));
    dispatch(setSelectedAdvert(data[0])); 
  };

  const handleClose = () => {
    dispatch(setIsModalOpen(false));
    dispatch(setSelectedAdvert(null));
  };

  return (
    <>
      <ul>
        {data.slice(0, displayedItems).map((advert) => (
          <li key={advert.id}>
            <Wrapper>
              <WrapperImage>
                <Favorite data={advert} />
                <Image data={advert} />
              </WrapperImage>
              <WrapperTitle>
                <Title>
                  {advert.make} <span style={{ color: '#3470FF' }}>{advert.model}</span>,{' '}
                  {advert.year}
                </Title>
                <Price>{advert.rentalPrice}</Price>
              </WrapperTitle>
              <Discription>
                <li>{advert.address.split(',')[1]}</li>
                <li>{advert.address.split(',')[2]}</li>
                <li>{advert.rentalCompany}</li>
                <li>{advert.type}</li>
                <li>{advert.model}</li>
                <li>{advert.mileage}</li>
                <li>{advert.accessories[0]}</li>
              </Discription>
              <Button text="Learn more" onClick={handleOpen} width="274px" />
              {isModalOpen && selectedAdvert && (
                <Modal open={isModalOpen} onClose={handleClose} data={selectedAdvert} />
              )}
            </Wrapper>
          </li>
        ))}
      </ul>
    </>
  );
};

export default AdvertList;
