import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import BodyHeader from './BodyHeader';
import BodyDetail from './BodyDetail';
import { loadArtworks } from '../redux/artworks/artworks';
import Lining from './Lining';

const Detail = () => {
  const dispatch = useDispatch();
  const loadArtworksAction = bindActionCreators(loadArtworks, dispatch);
  const artworks = useSelector((state) => state.artworks);

  useEffect(() => {
    if (artworks.responseData.length === 0) loadArtworksAction();
    return () => null;
  }, []);
  return (
    <>
      <BodyHeader text="ArtWorks" />
      <Lining />
      <section>
        {artworks.responseData.map((artwork) => (
          <BodyDetail
            key={artwork.id}
            title={artwork.title}
            mainReferenceNumber={artwork.main_reference_number}
          />
        ))}
      </section>
    </>
  );
};
export default Detail;
