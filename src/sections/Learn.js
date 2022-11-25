import Container from "../components/Container";
import Button from "../components/Button";

const Learn = () => {
  return (
    <section className="learn">
      <Container>
        <div className="learn__body">
          <div className="learn__cart">
            <div className="learn__cart-img-container">
              <picture>
                <source
                  type="image/webp"
                  srcSet="./img/learn/learn-1/learn-1@w280.webp 280w , ./img/learn/learn-1/learn-1@w379.webp 379w, ./img/learn/learn-1/learn-1@w464.webp 464w, ./img/learn/learn-1/learn-1@w532.webp 532w, ./img/learn/learn-1/learn-1@w604.webp 604w, ./img/learn/learn-1/learn-1@w670.webp 670w, ./img/learn/learn-1/learn-1@w726.webp 726w, ./img/learn/learn-1/learn-1@w775.webp 775w, ./img/learn/learn-1/learn-1@w828.webp 828w, ./img/learn/learn-1/learn-1@w864.webp 864w"
                />
                <source
                  type="image/png"
                  srcSet="./img/learn/learn-1/learn-1@w280.png 280w , ./img/learn/learn-1/learn-1@w379.png 379w, ./img/learn/learn-1/learn-1@w464.png 464w, ./img/learn/learn-1/learn-1@w532.png 532w, ./img/learn/learn-1/learn-1@w604.png 604w, ./img/learn/learn-1/learn-1@w670.png 670w, ./img/learn/learn-1/learn-1@w726.png 726w, ./img/learn/learn-1/learn-1@w775.png 775w, ./img/learn/learn-1/learn-1@w828.png 828w, ./img/learn/learn-1/learn-1@w864.png 864w"
                />
                <img
                  className="learn__cart-img"
                  src="./img/learn/learn-1/learn-1@w864.png"
                  alt="course"
                />
              </picture>
            </div>
            <article className="learn__cart-content">
              <h2 className="title title--blue learn__cart-title">
                Premium courses from the industry leaders
              </h2>
              <p className="learn__cart-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat.
              </p>
              <div className="learn__cart-buttons list">
                <Button color="blue">Get started</Button>
                <Button color="transparent" icon="arrow_right">
                  Learn more
                </Button>
              </div>
            </article>
          </div>
          <div className="learn__cart">
            <div className="learn__cart-img-container">
              <picture>
                <source
                  type="image/webp"
                  srcSet="./img/learn/learn-2/learn-2@w280.webp 280w, ./img/learn/learn-2/learn-2@w378.webp 378w,./img/learn/learn-2/learn-2@w461.webp 461w, ./img/learn/learn-2/learn-2@w534.webp 534w, ./img/learn/learn-2/learn-2@w600.webp 600w, ./img/learn/learn-2/learn-2@w663.webp 663w, ./img/learn/learn-2/learn-2@w720.webp 720w, ./img/learn/learn-2/learn-2@w769.webp 769w, ./img/learn/learn-2/learn-2@w825.webp 825w, ./img/learn/learn-2/learn-2@w864.webp 864w"
                />
                <source
                  type="image/png"
                  srcSet="./img/learn/learn-2/learn-2@w280.png 280w, ./img/learn/learn-2/learn-2@w378.png 378w,./img/learn/learn-2/learn-2@w461.png 461w, ./img/learn/learn-2/learn-2@w534.png 534w, ./img/learn/learn-2/learn-2@w600.png 600w, ./img/learn/learn-2/learn-2@w663.png 663w, ./img/learn/learn-2/learn-2@w720.png 720w, ./img/learn/learn-2/learn-2@w769.png 769w, ./img/learn/learn-2/learn-2@w825.png 825w, ./img/learn/learn-2/learn-2@w864.png 864w"
                />
                <img className="learn__cart-img" src="./img/learn/learn-2/learn-2@w864.png" alt="course" />
              </picture>
            </div>
            <article className="learn__cart-content">
              <h2 className="title title--blue learn__cart-title">
                Easily find the perfect course for you
              </h2>
              <p className="learn__cart-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat.
              </p>
              <div className="learn__cart-buttons list">
                <Button color="blue">Get started</Button>
                <Button color="transparent" icon="arrow_right">
                  Learn more
                </Button>
              </div>
            </article>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Learn;
