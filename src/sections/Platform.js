import {Button,Container,Flag} from "../components";

const Platform = () => {
  return (
    <section className="platform">
      <p className="platform__uptitle">Trusted by the world's best companies</p>
      <Container>
        <div className="platform__body section-header">
          <Flag className="platform__flag section-header__flag" color="white">
            About us
          </Flag>
          <h2 className="title title--blue section-header__title platform__title">
            No-code Education Platform
          </h2>
          <p className="platform__text section-header__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
          <Button className="platform__btn section-header__btn" color="blue">
            About us
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Platform;
