import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import BodyHeader from './BodyHeader';
import BodyCard from './BodyCard';
import { countryClicked, loadCountries } from '../redux/countries/countries';
import FilterComponent from './Filter';
import Lining from './Lining';

const Home = () => {
  const dispatch = useDispatch();
  const loadCountriesAction = bindActionCreators(loadCountries, dispatch);
  const countryClickedAction = bindActionCreators(countryClicked, dispatch);
  const countryObject = useSelector((state) => state.countries);
  useEffect(() => {
    if (countryObject.filtererdCountries.length === 0) loadCountriesAction();
    return () => null;
  }, []);

  return (
    <>
      <BodyHeader />
      <Lining text="Covid19 World Statistics" padding="p-2" />
      <FilterComponent />
      <section className="row">
        { countryObject.filtererdCountries.length !== 0
          ? countryObject.filtererdCountries.map((country) => (
            <BodyCard
              key={country[1].id}
              text={country[0]}
              bodyClass="artwork"
              count={country[1].today_confirmed}
              handleClickprops={countryClickedAction}
              path="/details"
            />
          )) : <h1>No Country Found!.................</h1>}
      </section>
    </>
  );
};

export default Home;
