import { Col, Row } from "react-bootstrap";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <div className="cards d-flex align-items-start flex-column">
      <Row md={2} xs={1} lg={3} className="g-5">
        <Col>
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
        </Col>
        <Col>
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
        </Col>
        <Col>
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
                src="public/imgs/Luka.jpg"
                className="thumb"
              />
              <span>Luka Matić</span>
            </footer>
          </div>
        </Col>
        <Col>
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
                src="public/imgs/David.jpg"
                className="thumb"
              />
              <span>David Marković</span>
            </footer>
          </div>
        </Col>
        <Col>
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
        </Col>
        <Col>
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
        </Col>
      </Row>
    </div>
  );
};

export default Testimonials;
