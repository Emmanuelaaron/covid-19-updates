import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import BodyHeader from './BodyHeader';
import BodyCard from './BodyCard';
import { artWorkClick } from '../redux/artworks/artworks';

const Home = () => {
  const dispatch = useDispatch();
  const artWorkClickAction = bindActionCreators(artWorkClick, dispatch);
  return (
    <>
      <BodyHeader />
      <section className="row">
        <BodyCard text="ArtWorks" bodyClass="artwork" handleClickprops={artWorkClickAction} path="/details" />
        {/* <BodyCard text="Agents" bodyClass="agents" /
        <BodyCard text="places" bodyClass="agents" />
        <BodyCard text="galleries" bodyClass="artwork" />
        <BodyCard text="Exhibitions" bodyClass="artwork" />
        <BodyCard text="Art-work-types" bodyClass="agents" /> */}
      </section>
    </>
  );
};

export default Home;
