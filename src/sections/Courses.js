import {Button,Container,Flag} from "../components";

const Courses = () => {
  return (
    <section className="courses">
      <Container>
        <div className="courses__body">
          <header className="courses__header section-header">
            <Flag className="section-header__flag" color="pink">
              Trending
            </Flag>
            <h2 className="title title--blue courses__title section-header__title">
              The most popular courses
            </h2>
            <p className="courses__subtitle section-header__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare.
            </p>
          </header>
          <div className="courses__carts">
            <article className="courses__cart">
              <header className="courses__cart-header">
                <Flag color="white">Beginner</Flag>
                <h3 className="title title--white courses__cart-title">
                  Webflow Basics
                </h3>
                <span className="courses__cart-price">$ 24.00 USD</span>
              </header>
              <Button color="green" className="courses__cart-btn">
                Enroll Course
              </Button>
              <img
                className="courses__cart-img"
                src="./img/courses/courses-1/courses-1.png"
                srcSet="./img/courses/courses-1/courses-1.webp"
                alt="course"
              />
            </article>
            <article className="courses__cart">
              <header className="courses__cart-header">
                <Flag color="white">Beginner</Flag>
                <h3 className="title title--white courses__cart-title">
                  Webflow Interactions Masterclass
                </h3>
                <span className="courses__cart-price">$ 55.00 USD</span>
              </header>
              <Button color="green" className="courses__cart-btn">
                Enroll Course
              </Button>
              <img
                className="courses__cart-img"
                src="./img/courses/courses-2/courses-2.png"
                srcSet="./img/courses/courses-2/courses-2.webp"
                alt="course"
              />
            </article>
            <article className="courses__cart">
              <header className="courses__cart-header">
                <Flag color="white">Beginner</Flag>
                <h3 className="title title--white courses__cart-title">
                  Webflow Basics
                </h3>
                <span className="courses__cart-price">$ 38.00 USD</span>
              </header>
              <Button color="green" className="courses__cart-btn">
                Enroll Course
              </Button>
              <img
                className="courses__cart-img"
                src="./img/courses/courses-3/courses-3.png"
                srcSet="./img/courses/courses-3/courses-3.webp"
                alt="course"
              />
            </article>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Courses;
