import {Container, Icon} from "../components";

const Carts = () => {
  return (
    <section className="carts">
      <Container>
        <div className="carts__body">
          <article className="carts__cart">
            <span className="icon--rounded icon--white">
              <Icon icon="person" />
            </span>
            <h3 className="title title--blue carts__cart-title">
              Browse our courses
            </h3>
            <p className="carts__cart-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique duis cursus mi
              quis viverra.
            </p>
          </article>
          <article className="carts__cart">
            <span className="icon--rounded icon--white">
              <Icon icon="shield" />
            </span>
            <h3 className="title title--blue carts__cart-title">
              Browse our courses
            </h3>
            <p className="carts__cart-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique duis cursus mi
              quis viverra.
            </p>
          </article>
          <article className="carts__cart">
            <span className="icon--rounded icon--white">
              <Icon icon="school" />
            </span>
            <h3 className="title title--blue carts__cart-title">
              Browse our courses
            </h3>
            <p className="carts__cart-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique duis cursus mi
              quis viverra.
            </p>
          </article>
        </div>
      </Container>
    </section>
  );
};

export default Carts;
