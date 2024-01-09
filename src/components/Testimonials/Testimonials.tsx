import { Col, Row } from "react-bootstrap";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <div className="cards d-flex align-items-start flex-column">
      <Row md={2} xs={1} lg={3} className="g-0">
        <Col>
          <div className="cardTestimonials">
            <div className="cardTestimonials-content">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. In,
                nostrum!
              </p>
            </div>
            <footer className="cardTestimonials-footer">
              <img alt="user.jpg" src="imgs/Marija.jpg" className="thumb" />
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
              <img alt="user.jpg" src="imgs/Martina.jpg" className="thumb" />
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
              <img alt="user.jpg" src="imgs/Luka.jpg" className="thumb" />
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
              <img alt="user.jpg" src="imgs/David.jpg" className="thumb" />
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
              <img alt="user.jpg" src="imgs/Ana.jpg" className="thumb" />
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
              <img alt="user.jpg" src="imgs/Jelena.jpg" className="thumb" />
              <span>Jelena Brcković</span>
            </footer>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Testimonials;
