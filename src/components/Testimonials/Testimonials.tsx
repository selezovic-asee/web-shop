import "./Testimonials.css";

const Testimonials = () => {
  return (
    <div
      className="d-flex align-items-start flex-column"
      style={{ height: "750px" }}
    >
      <div className="1row mb-auto d-flex">
        <div className="cardTestimonials">
          <div className="cardTestimonials-content">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. In,
              nostrum!
            </p>
          </div>
          <footer className="cardTestimonials-footer">
            <img
              alt="user.jpg"
              src="public/imgs/Marija.jpg"
              className="thumb"
            />
            <span>Marija Horvat</span>
          </footer>
        </div>
        <div className="cardTestimonials">
          <div className="cardTestimonials-content">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. In,
              nostrum!
            </p>
          </div>
          <footer className="cardTestimonials-footer">
            <img
              alt="user.jpg"
              src="public/imgs/Martina.jpg"
              className="thumb"
            />
            <span>Martina Toš</span>
          </footer>
        </div>
        <div className="cardTestimonials">
          <div className="cardTestimonials-content">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. In,
              nostrum!
            </p>
          </div>
          <footer className="cardTestimonials-footer">
            <img alt="user.jpg" src="public/imgs/Luka.jpg" className="thumb" />
            <span>Luka Matić</span>
          </footer>
        </div>
      </div>
      <div className="2row d-flex">
        <div className="cardTestimonials">
          <div className="cardTestimonials-content">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. In,
              nostrum!
            </p>
          </div>
          <footer className="cardTestimonials-footer">
            <img alt="user.jpg" src="public/imgs/David.jpg" className="thumb" />
            <span>David Marković</span>
          </footer>
        </div>
        <div className="cardTestimonials">
          <div className="cardTestimonials-content">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. In,
              nostrum!
            </p>
          </div>
          <footer className="cardTestimonials-footer">
            <img alt="user.jpg" src="public/imgs/Ana.jpg" className="thumb" />
            <span>Ana Babić</span>
          </footer>
        </div>
        <div className="cardTestimonials">
          <div className="cardTestimonials-content">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. In,
              nostrum!
            </p>
          </div>
          <footer className="cardTestimonials-footer">
            <img
              alt="user.jpg"
              src="public/imgs/Jelena.jpg"
              className="thumb"
            />
            <span>Jelena Brcković</span>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
