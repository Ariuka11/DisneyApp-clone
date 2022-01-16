import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
function Slider({ results }) {
  const base_url = "https://image.tmdb.org/t/p/original/";
  console.log("slider", results);
  return (
    <section className="relative mt-7 mx-auto shadow-2xl max-w-screen-2xl">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        {results.map((res) => (
          <div key={res.id} className=" ">
            <img
              className="max-w-full h-[400px] object-cover"
              loading="lazy"
              src={`${base_url}${res.backdrop_path || res.poster_path}`}
              alt=""
            />
          </div>
        ))}
        {/* <div>
          <img loading="lazy" src="/images/slider-2.jpg" alt="" />
        </div>
        <div>
          <img loading="lazy" src="/images/slider-3.jpg" alt="" />
        </div>
        <div>
          <img loading="lazy" src="/images/slider-4.jpeg" alt="" />
        </div> */}
      </Carousel>
    </section>
  );
}

export default Slider;
