import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import BodyHeader from './BodyHeader';
import BodyCard from './BodyCard';
import { countryClicked, loadCountries } from '../redux/artworks/artworks';
import Lining from './Lining';

const Home = () => {
  const dispatch = useDispatch();
  const loadCountriesAction = bindActionCreators(loadCountries, dispatch);
  const countryClickedAction = bindActionCreators(countryClicked, dispatch);
  const countryObject = useSelector((state) => state.artworks);
  useEffect(() => {
    if (countryObject.countries.length === 0) loadCountriesAction();
    return () => null;
  }, []);
  const myValues = Object.values(countryObject.countries)[0];
  const res = myValues !== undefined ? Object.values(myValues) : 'jk';
  const [firstObject] = res;

  const myCountries = Object.entries(firstObject);
  return (
    <>
      <BodyHeader />
      <Lining text="Covid19 World Statistics" padding="p-2" />
      <section className="row">
        {
          myCountries.map((country) => (
            <BodyCard
              key={country[1].id}
              text={country[0]}
              bodyClass="artwork"
              count={country[1].today_confirmed}
              handleClickprops={countryClickedAction}
              path="/details"
            />
          ))
        }
      </section>
    </>
  );
};

export default Home;
