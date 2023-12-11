import React, { useState } from 'react';
import CustomModal from '../Modal/CustomModal';
import { FavoriteCards } from 'components/FavoriteCards/FavoriteCards';
import BasicButtons from '../Button/Button';
import {
  Description,
  Image,
  Price,
  Title,
  Wrapper,
  WrapperImage,
  WrapperTitle,
} from './AdvertsCard.styled';

const AdvertsCard = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAdvert, setSelectedAdvert] = useState(null);

  const handleOpen = data => {
    setSelectedAdvert(data);
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setSelectedAdvert(null);
    setIsModalOpen(false);
  };

  return (
    <Wrapper>
      <WrapperImage>
        <FavoriteCards data={data} />
        <Image src={data.img} loading="lazy" alt={data.make} />
      </WrapperImage>
      <WrapperTitle>
        <Title>
          {data.make} <span style={{ color: '#3470FF' }}>{data.model}</span>,{' '}
          {data.year}
        </Title>
        <Price>{data.rentalPrice}</Price>
      </WrapperTitle>
      <Description>
        <li>{data.address.split(',')[1]}</li>
        <li>{data.address.split(',')[2]}</li>
        <li>{data.rentalCompany}</li>
        <li>{data.type}</li>
        <li>{data.model}</li>
        <li>{data.mileage}</li>
        <li>{data.accessories[0]}</li>
      </Description>
      <BasicButtons
        text="Learn more"
        onClick={() => handleOpen(data)}
        width="274px"
      />{' '}
      {isModalOpen && selectedAdvert && (
        <CustomModal
          open={isModalOpen}
          onClose={handleClose}
          data={selectedAdvert}
        />
      )}
    </Wrapper>
  );
};

export default AdvertsCard;
