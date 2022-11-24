import Container from "../components/Container";
import Icon from '../components/Icon';
import { useRef } from 'react';


const Advertisement = () => {
  const ad = useRef();

  const handleClick = ()=>{
    ad.current.classList.add('hidden')
  };

  return (
    <section ref={ad} className="ad">
      <Container>
        <div className="ad__body">
          <span className="ad__text">
            Create Award Winning Websites In Webflow
          </span>
        </div>
      </Container>
    <span onClick={handleClick} className="ad__icon icon--black" >
      <Icon icon="close" />
    </span>
    </section>
  );
};

export default Advertisement;
