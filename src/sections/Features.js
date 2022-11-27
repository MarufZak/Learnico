import {Container,Flag,Icon,Button} from "../components";


const Features = () => {
  return (
    <section className="features">
      <Container>
        <div className="features__body">
          <header className="features__header section-header">
            <Flag color="pink">Benefits</Flag>
            <h2 className="features__title title--blue section-header__title">
              Grow your knowledge from best teachers in the industry
            </h2>
            <p className="features__text section-header__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare.
            </p>
          </header>
          <div className="features__content">
            <div className="features__carts">
              <article className="features__cart">
                <span className="icon--white icon--rounded">
                  <Icon icon="play" />
                </span>
                <h3 className="title title--blue features__cart-title">
                  Over 430+ hours of lessons
                </h3>
                <p className="features__header-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>
              </article>
              <article className="features__cart">
                <span className="icon--white icon--rounded">
                  <Icon icon="person" />
                </span>
                <h3 className="title title--blue features__cart-title">
                  40+ teachers
                </h3>
                <p className="features__header-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>
              </article>
            </div>
            <div className="features__img-block">
              <picture>
                <source
                  type="image/webp"
                  srcSet="./img/features/features@w280.webp 280w, ./img/features/features@w374.webp 374w, ./img/features/features@w455.webp 455w, ./img/features/features@w504.webp 504w"
                  sizes="(max-width: 998px) 34vw, 60vw"
                />
                <source
                  type="image/webp"
                  srcSet="./img/features/features@w280.jpg 280w, ./img/features/features@w374.jpg 374w, ./img/features/features@w455.jpg 455w, ./img/features/features@w504.jpg 504w"
                  sizes="(max-width: 998px) 34vw, 60vw"
                />
                <img
                  className="features__img"
                  src="./img/features/features@w504.jpg"
                  alt="user"
                />
              </picture>
            </div>
            <div className="features__carts">
              <article className="features__cart">
                <span className="icon--white icon--rounded">
                  <Icon icon="play" />
                </span>
                <h3 className="title title--blue features__cart-title">
                  Online community
                </h3>
                <p className="features__header-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>
              </article>
              <article className="features__cart">
                <span className="icon--white icon--rounded">
                  <Icon icon="person" />
                </span>
                <h3 className="title title--blue features__cart-title">
                  1-on-1 coaching
                </h3>
                <p className="features__header-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>
              </article>
            </div>
          </div>
          <Button className="features__btn" color="blue">
            Get started
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Features;
