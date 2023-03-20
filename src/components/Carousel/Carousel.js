const Carousel = () => {
  const carouselImages = [
    {
      id: 2,
      img: "https://i.pinimg.com/originals/f8/d3/61/f8d36127b03a4df2b7946de612167125.jpg",
      alt: "guest seating outside",
    },
    {
      id: 3,
      img: "https://i.imgur.com/RLeWIo1.jpg",
      alt: "green drapes",
    },
    {
      id: 4,
      img: "https://i.imgur.com/ELRcLOF.jpg",
      alt: "table setting",
    },
    {
      id: 4,
      img: "https://i.imgur.com/YXkR1CM.jpg",
      alt: "venue arch entry",
    },
    {
      id: 5,
      img: "https://i.pinimg.com/564x/39/e9/c3/39e9c3d9adf31d7f57d9d79b80ca08bc.jpg",
      alt: "cake table",
    },
    {
      id: 6,
      img: "https://i.pinimg.com/originals/ad/68/a7/ad68a7877273f1ff88274380c8d5ca29.jpg",
      alt: "venue",
    },
    {
      id: 7,
      img: "https://i.pinimg.com/564x/61/2b/23/612b23ec0b3ca6446b0b0ab290ef4c94.jpg",
      alt: "ceremony",
    },
    {
      id: 8,
      img: "https://i.pinimg.com/originals/3c/3a/8f/3c3a8f2338bfe5d434023c83be8c6177.jpg",
      alt: "venue",
    },
  ];

  return (
    <>
      {carouselImages.map((image) => {
        return (
          <div className="carousel-item " id={image.id}>
            <img
              src={image.img}
              alt={image.alt}
              className="d-block img-fluid w-50 mx-auto"
            />
          </div>
        );
      })}
    </>
  );
};

export default Carousel;
