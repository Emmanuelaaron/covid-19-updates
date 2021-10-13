import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import BodyHeader from './BodyHeader';
import BodyCard from './BodyCard';
import { artWorkClick, loadArtworks } from '../redux/artworks/artworks';

const Home = () => {
  const dispatch = useDispatch();
  const artWorkClickAction = bindActionCreators(artWorkClick, dispatch);
  const loadArtworksAction = bindActionCreators(loadArtworks, dispatch);
  const artWorks = useSelector((state) => state.artworks);

  useEffect(() => {
    if (artWorks.responseData === '') loadArtworksAction();
    return () => null;
  }, []);
  return (
    <>
      <BodyHeader />
      <section className="row">
        <BodyCard text="ArtWorks" count={artWorks.responseData.length} bodyClass="artwork" handleClickprops={artWorkClickAction} path="/details" />
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
