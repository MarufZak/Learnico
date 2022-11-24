import Container from "../components/Container";
import Icon from "../components/Icon";

const Intro = () => {
  return (
    <section className="intro">
      <Container>
        <div className="intro__body">
          <div className="intro__content">
            <h1 className="intro__title title title--white">
              Become an No-Code expert and find a job
            </h1>
            <p className="intro__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum vel molestie magna curabitur tincidunt nunc sit amet.
            </p>
            <div className="intro__buttons list">
              <button className="btn btn--green intro__btn">
                Explore Courses
              </button>
              <button className="btn btn--transparent btn--icon intro__btn">
                Watch Video
                <span className="intro__btn-icon">
                  <Icon icon="play" />
                </span>
              </button>
            </div>
            <div className="intro__reviews">
                <img src="./img/intro-review.png" alt="" />
                <div className="intro__reviews-content">
                    <span className="intro__stars">★ ★ ★ ★ ★</span>
                    <p className="intro__reviews-text">From 3k+ reviews</p>
                </div>
            </div>
          </div>
          <div className="intro__img-block">
            <picture>
              <source type="image/webp" srcSet="./img/intro/intro@w280.webp 280w, ./img/intro/intro@w389.webp 389w, ./img/intro/intro@w470.webp 470w, ./img/intro/intro@w547.webp 547w, ./img/intro/intro@w600.webp 600w" sizes="(max-width: 768px) calc(100vw-3rem), 45vw" />
              <source className="intro__img" type="image/png" srcSet="./img/intro/intro@w280.png 280w , ./img/intro/intro@w389.png 389w, ./img/intro/intro@w470.png 470w, ./img/intro/intro@w547.png 547w, ./img/intro/intro@w600.png 600w" />
              <img className="intro__img" src="./img/intro/intro@w600.png" alt="" />
            </picture>
            <img className="intro__img-figure" src="./img/intro/intro-figure.png" alt="figure" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Intro;
