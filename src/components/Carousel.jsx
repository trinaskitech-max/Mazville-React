import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Carousel = ({ slides }) => {
  return (
    <section className="component component--carousel py-fluid-lg bg-gray">
      <div className="max-w-7xl mx-auto px-fluid-sm">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={32}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1.2,
            },
            768: {
              slidesPerView: 1.5,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
          className="carousel-swiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="slide-contents space-y-4 p-fluid-sm bg-white transition-all duration-1000 ease-out hover:shadow-2xl">
                <figure className="aspect-[4/3] overflow-hidden group">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                </figure>
                <div className="slide-description space-y-3 opacity-0 transition-opacity duration-1000">
                  <h3 className="text-fluid-md font-headings">{slide.title}</h3>
                  <p className="text-fluid-sm">{slide.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Carousel;
