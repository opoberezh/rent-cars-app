import React, { useState } from 'react';
import CustomModal from '../Modal/CustomModal';
import { FavoriteCards } from '../FavoriteCards/FavoriteCards';
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

const AdvertsCard = ({ adverts }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const handleOpen = (data) => {
    setSelectedData(data);
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setSelectedData(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <ul>
        {adverts.map((data) => (
          <li key={data.id}>
            <Wrapper>
              <WrapperImage>
                <FavoriteCards data={data} />
                <Image data={data} />
              </WrapperImage>
              <WrapperTitle>
                <Title>
                  {data.make} <span style={{ color: '#3470FF' }}>{data.model}</span>, {data.year}
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
              />
            </Wrapper>
          </li>
        ))}
      </ul>

      {isModalOpen && selectedData && (
        <CustomModal open={isModalOpen} onClose={handleClose} data={selectedData} />
      )}
    </>
  );
};

export default AdvertsCard;
