import {Container,Flag} from "../components";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const Feedback = () => {
  return (
    <section className="feedback">
      <Container>
        <div className="feedback__body">
          <header className="feedback__header section-header">
            <Flag className="feedback__flag" color="white">
              Testimonials
            </Flag>
            <h2 className="title title--blue feedback__title section-header__title">
              What our students say
            </h2>
            <p className="feedback__subtitle section-header__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
          </header>
        </div>
      </Container>
      <Splide
        className="feedback__slider"
        options={{
          arrows: false,
          perPage: 3,
          perMove: 1,
          gap: "3rem",
          padding: {
            left: "clamp(1rem , 3.5vw, 7rem)",
            right: "clamp(1rem , 3.5vw, 7rem)",
          },
          autoplay: true,
          rewind: true,
          breakpoints: {
            998: {
              perPage: 2,
            },
            540: {
              perPage: 1,
            },
          },
        }}
      >
        <SplideSlide data-splide-interval="5000" className="feedback__slide">
          <span className="feedback__slide-star">★★★★★</span>
          <p className="feedback__slide-text">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
            quis viverra ornare."
          </p>
          <div className="feedback__slide-profile">
            <img src="./img/feedback/feedback-2.jpg" alt="user" />
            <div>
              <p className="feedback__slide-name">Lori Bryson</p>
              <span className="feedback__slide-job">
                Design System Manager, @Company
              </span>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide data-splide-interval="5000" className="feedback__slide">
          <span className="feedback__slide-star">★★★★★</span>
          <p className="feedback__slide-text">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
            quis viverra ornare."
          </p>
          <div className="feedback__slide-profile">
            <img src="./img/feedback/feedback-1.jpg" alt="user" />
            <div>
              <p className="feedback__slide-name">Orlando Diggs</p>
              <span className="feedback__slide-job">
                Junior UI Designer, @Company
              </span>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide data-splide-interval="5000" className="feedback__slide">
          <span className="feedback__slide-star">★★★★★</span>
          <p className="feedback__slide-text">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
            quis viverra ornare."
          </p>
          <div className="feedback__slide-profile">
            <img src="./img/feedback/feedback-2.jpg" alt="user" />
            <div>
              <p className="feedback__slide-name">Lori Bryson</p>
              <span className="feedback__slide-job">
                Design System Manager, @Company
              </span>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide data-splide-interval="5000" className="feedback__slide">
          <span className="feedback__slide-star">★★★★★</span>
          <p className="feedback__slide-text">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
            quis viverra ornare."
          </p>
          <div className="feedback__slide-profile">
            <img src="./img/feedback/feedback-1.jpg" alt="user" />
            <div>
              <p className="feedback__slide-name">Orlando Diggs</p>
              <span className="feedback__slide-job">
                Junior UI Designer, @Company
              </span>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide data-splide-interval="5000" className="feedback__slide">
          <span className="feedback__slide-star">★★★★★</span>
          <p className="feedback__slide-text">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
            quis viverra ornare."
          </p>
          <div className="feedback__slide-profile">
            <img src="./img/feedback/feedback-2.jpg" alt="user" />
            <div>
              <p className="feedback__slide-name">Lori Bryson</p>
              <span className="feedback__slide-job">
                Design System Manager, @Company
              </span>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide data-splide-interval="5000" className="feedback__slide">
          <span className="feedback__slide-star">★★★★★</span>
          <p className="feedback__slide-text">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
            quis viverra ornare."
          </p>
          <div className="feedback__slide-profile">
            <img src="./img/feedback/feedback-1.jpg" alt="user" />
            <div>
              <p className="feedback__slide-name">Orlando Diggs</p>
              <span className="feedback__slide-job">
                Junior UI Designer, @Company
              </span>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide data-splide-interval="5000" className="feedback__slide">
          <span className="feedback__slide-star">★★★★★</span>
          <p className="feedback__slide-text">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
            quis viverra ornare."
          </p>
          <div className="feedback__slide-profile">
            <img src="./img/feedback/feedback-2.jpg" alt="user" />
            <div>
              <p className="feedback__slide-name">Lori Bryson</p>
              <span className="feedback__slide-job">
                Design System Manager, @Company
              </span>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide data-splide-interval="5000" className="feedback__slide">
          <span className="feedback__slide-star">★★★★★</span>
          <p className="feedback__slide-text">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
            quis viverra ornare."
          </p>
          <div className="feedback__slide-profile">
            <img src="./img/feedback/feedback-1.jpg" alt="user" />
            <div>
              <p className="feedback__slide-name">Orlando Diggs</p>
              <span className="feedback__slide-job">
                Junior UI Designer, @Company
              </span>
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </section>
  );
};

export default Feedback;
