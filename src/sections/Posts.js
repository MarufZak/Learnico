import {Button,Container,Flag} from "../components";

const Posts = () => {
  return (
    <section className="posts">
      <Container>
        <div className="posts__body">
          <Flag color="pink">Blog</Flag>
          <header className="posts__header">
            <h2 className="title title--white posts__title">
              Our latest posts
            </h2>
            <Button color="white" className="posts__btn">
              View all
            </Button>
          </header>
          <div className="posts__carts">
            <article className="posts__cart">
              <picture>
                <source
                  type="image/webp"
                  srcSet="./img/posts/posts-1/posts-1@w280.webp 280w, ./img/posts/posts-1/posts-1@w405.webp 405w"
                  sizes="(max-width: 768px) 51vw, (max-width: 500px) 94vw, 28vw"
                />
                <source
                  type="image/jpg"
                  srcSet="./img/posts/posts-1/posts-1@w280.jpg 280w, ./img/posts/posts-1/posts-1@w405.jpg 405w"
                  sizes="(max-width: 768px) 51vw, (max-width: 500px) 94vw, 28vw"
                />
                <img
                  className="posts__cart-img"
                  src="./img/posts/posts-1/posts-1@w405.jpg"
                  alt="post"
                />
              </picture>
              <div className="posts__cart-content">
                <Flag className="posts__cart-flag" color="green">
                  Freelance
                </Flag>
                <h3 className="title title--blue posts__cart-title">
                  7 freelance mistakes to avoid
                </h3>
                <p className="posts__cart-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>
                <Button
                  className="posts__cart-btn"
                  color="transparent"
                  icon="arrow_right"
                >
                  Read more
                </Button>
              </div>
            </article>
            <article className="posts__cart">
              <picture>
                <source
                  type="image/webp"
                  srcSet="./img/posts/posts-2/posts-2@w280.webp 280w, ./img/posts/posts-2/posts-2@w405.webp 405w"
                  sizes="(max-width: 768px) 51vw, (max-width: 500px) 94vw, 28vw"
                />
                <source
                  type="image/jpg"
                  srcSet="./img/posts/posts-2/posts-2@w280.jpg 280w, ./img/posts/posts-2/posts-2@w405.jpg 405w"
                  sizes="(max-width: 768px) 51vw, (max-width: 500px) 94vw, 28vw"
                />
                <img
                  className="posts__cart-img"
                  src="./img/posts/posts-2/posts-2@w405.jpg"
                  alt="post"
                />
              </picture>
              <div className="posts__cart-content">
                <Flag className="posts__cart-flag" color="green">
                  UI/UX Design
                </Flag>
                <h3 className="title title--blue posts__cart-title">
                  Brand design process explained
                </h3>
                <p className="posts__cart-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>
                <Button
                  className="posts__cart-btn"
                  color="transparent"
                  icon="arrow_right"
                >
                  Read more
                </Button>
              </div>
            </article>
            <article className="posts__cart">
              <picture>
                <source
                  type="image/webp"
                  srcSet="./img/posts/posts-3/posts-3@w280.webp 280w, ./img/posts/posts-3/posts-3@w405.webp 405w"
                  sizes="(max-width: 768px) 94vw, 28vw"
                />
                <source
                  type="image/jpg"
                  srcSet="./img/posts/posts-3/posts-3@w280.jpg 280w, ./img/posts/posts-3/posts-3@w405.jpg 405w"
                  sizes="(max-width: 768px) 94vw, 28vw"
                />
                <img
                  className="posts__cart-img"
                  src="./img/posts/posts-3/posts-3@w405.jpg"
                  alt="post"
                />
              </picture>
              <div className="posts__cart-content">
                <Flag className="posts__cart-flag" color="green">
                  Business
                </Flag>
                <h3 className="title title--blue posts__cart-title">
                  The beginner's guide to recruiting a Webflow developer
                </h3>
                <p className="posts__cart-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>
                <Button
                  className="posts__cart-btn"
                  color="transparent"
                  icon="arrow_right"
                >
                  Read more
                </Button>
              </div>
            </article>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Posts;
