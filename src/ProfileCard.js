import React from 'react';
import Slider from 'react-slick';

const ProfileCard = () => {
  const profileImages = [
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg',
    // Add more image URLs as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {profileImages.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Profile d ${index + 1}`} />
        </div>
      ))}
    </Slider>
  );
};

export default ProfileCard;
