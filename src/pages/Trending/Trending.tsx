import Testimonials from "../../components/Testimonials/Testimonials";
import "./Trending.css";

const Trending = () => {
  return (
    <>
      <div className="d-flex justify-content-center p-5">
        <h1>What's trending?</h1>
      </div>
      <div
        className="d-flex justify-content-evenly "
        style={{ height: "200px" }}
      >
        <a
          href="https://www.sportskeeda.com/gaming-tech/best-upcoming-phones-2024"
          rel="noopener"
          target="_blank"
          className="mobile"
        >
          <img src="public/imgs/mobile.jpg" alt="mobile" />
        </a>
        <a
          href="https://www.eatingwell.com/article/15806/the-dirty-dozen-12-foods-you-should-buy-organic/"
          rel="noopener"
          target="_blank"
          className="organic"
        >
          <img src="public/imgs/organic.png" alt="mobile" />
        </a>
        <a
          href="https://www.cosmopolitan.com/style-beauty/beauty/g26477382/best-perfumes/"
          rel="noopener"
          target="_blank"
          className="perfume"
        >
          <img className="perfume" src="public/imgs/perfume.png" alt="mobile" />
        </a>
      </div>
      <div className="d-flex justify-content-center mb-5">
        <p>Click to learn more about the products you want to buy.</p>
      </div>
      <hr />
      <div className="d-flex flex-column align-items-start testimonials mt-5">
        <div className="testimonialsHeader d-flex justify-content-center">
          <h2>Testimonials</h2>
        </div>
        <div className="mt-auto">
          <Testimonials />
        </div>
      </div>
    </>
  );
};

export default Trending;
