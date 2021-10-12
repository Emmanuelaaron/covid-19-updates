import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadArtworks } from '../redux/artworks/artworks';
import BodyHeader from './BodyHeader';

const Detail = () => {
  const dispatch = useDispatch();
  const loadArtworksAction = bindActionCreators(loadArtworks, dispatch);
  const myartworks = useSelector((state) => state.artworks);

  useEffect(() => {
    if (myartworks.responseData === '') loadArtworksAction();
    return () => null;
  }, []);

  return (
    <>
      <BodyHeader />
      <h1>Details</h1>
    </>
  );
};
export default Detail;
