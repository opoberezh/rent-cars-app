import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import Favorite from 'components/pages/Favorit';
import { Description, Image, Price, Title, Wrapper, WrapperImage, WrapperTitle } from './AdvertsList.styled';
import { selectDisplayedItems, selectIsModalOpen, selectSelectedAdvert } from 'components/redux/selectors';

const AdvertList = ({ data }) => {
  const dispatch = useDispatch();
  const displayedItems = useSelector( selectDisplayedItems,);
  const isModalOpen = useSelector(selectIsModalOpen);
  const selectedAdvert = useSelector(selectSelectedAdvert);

  const handleOpen = () => {
    dispatch(selectIsModalOpen(true));
    dispatch(selectSelectedAdvert(data[0]));
  };

  const handleClose = () => {
    dispatch(selectIsModalOpen(false));
    dispatch(selectSelectedAdvert(null));
  };

  return (
    <>
      <ul>
        {data.slice(0, displayedItems).map(advert => (
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
              {isModalOpen && selectedAdvert && (
                <Modal
                  open={isModalOpen}
                  onClose={handleClose}
                  data={selectedAdvert}
                />
              )}
            </Wrapper>
          </li>
        ))}
      </ul>
    </>
  );
};

export default AdvertList;
