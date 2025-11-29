import NavLayout from "../components/NavLayout";
import Hero from "../components/homepage/Hero";
import TextMedia from "../components/homepage/TextMedia";
import Carousel from "../components/homepage/Carousel";

function Homepage() {
  const carouselSlides = [
    {
      title: "The Villa",
      description:
        "Spacious villa rooms with modern architecture and luxury amenities.",
      image: "/images/Mazvilla_pics/villa.jpeg",
    },
    {
      title: "Swimming Pool",
      description: "Relax by our pristine swimming pool with stunning views.",
      image: "/images/Mazvilla_pics/swimming_pool.jpeg",
    },
    {
      title: "Outdoor Dining",
      description: "Dine under the stars with our open-air dining experience.",
      image: "/images/Mazvilla_pics/outdoor_dining.jpeg",
    },
  ];

  return (
    <NavLayout>
      <main className="pt-[var(--banner-height)]">
        <Hero />

        <TextMedia
          title="Your Tranquil Escape Awaits"
          imageSrc="/images/Mazvilla_pics/cottage.jpeg"
          imageAlt="Mazville Medhaya Cottage"
          imageOnRight={false}
          content={
            <>
              <p>
                A serene cottage resort at Mazville Medhaya, uniquely set
                between a peaceful river at the back and a beautiful beach in
                front. Experience the rare luxury of witnessing both sunrise
                over the Arabian Sea and sunset by the tranquil river.
              </p>
              <p>
                Our bright, airy cottages feature modern comforts with
                floor-to-ceiling views that capture nature's best moments. Each
                room is thoughtfully designed to offer a uniquely tranquil stay
                surrounded by the beauty of coastal Karnataka.
              </p>
            </>
          }
        />

        <TextMedia
          title="Coastal Dining Experience"
          imageSrc="/images/Mazvilla_pics/outdoor_dining.jpeg"
          imageAlt="Outdoor Dining at Mazville"
          imageOnRight={true}
          content={
            <>
              <p>
                Savor authentic coastal Karnataka cuisine in our open-air dining
                spaces. Experience fresh seafood and local delicacies prepared
                with traditional recipes passed down through generations.
              </p>
              <p>
                Dine with panoramic views of the ocean or riverside, where every
                meal becomes a memorable experience. Our outdoor dining area
                lets you enjoy your favorite dishes while immersed in nature's
                tranquility.
              </p>
            </>
          }
        />

        <Carousel slides={carouselSlides} />

        <TextMedia
          title="Architecture Meets Nature"
          imageSrc="/images/Mazvilla_pics/asthetic_door.jpeg"
          imageAlt="Mazville Architecture"
          imageOnRight={false}
          content={
            <>
              <p>
                Every corner of Mazville Medhaya tells a story of thoughtful
                design. From aesthetic doorways to carefully curated artwork,
                our property seamlessly blends contemporary architecture with
                the natural beauty of Udupi's coastline.
              </p>
              <p>
                Whether you're seeking a peaceful retreat, a romantic getaway,
                or a rejuvenating escape, Mazville Medhaya offers the perfect
                sanctuary. Immerse yourself in comfort while staying connected
                to the rhythms of nature.
              </p>
            </>
          }
        />
      </main>
    </NavLayout>
  );
}

export default Homepage;
