import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import Card from 'react-bootstrap/Card';
import BodyHeader from './BodyHeader';
import BodyDetail from './BodyDetail';
import { loadCountries } from '../redux/artworks/artworks';
import Lining from './Lining';

const Detail = () => {
  const dispatch = useDispatch();
  const loadCountriesAction = bindActionCreators(loadCountries, dispatch);
  const countryObject = useSelector((state) => state.artworks);
  useEffect(() => {
    if (countryObject.countries.length === 0) loadCountriesAction();
    return () => null;
  }, []);
  const myValues = Object.values(countryObject.countries)[0];
  const res = myValues !== undefined ? Object.values(myValues) : 'jk';
  const [firstObject] = res;

  const myCountries = Object.entries(firstObject);
  const currentCountry = countryObject.detail;
  const filteredCountry = myCountries.filter((country) => (
    country[0] === currentCountry
  ));
  const { regions } = filteredCountry[0][1];
  if (regions.length === 0) {
    return (
      <>
        <BodyHeader text={`${currentCountry}'s Updates`} />
        <Lining text={`Cummulative Confirmed Cases: ${filteredCountry[0][1].today_confirmed}`} padding="p-3" />
        <section className="bg-dark">
          <Card className="bodyHeader " style={{ height: '82vw' }}>
            <Card.Body className="d-flex justify-content-center align-items-center flex-column">
              <h1>No regional Updates available</h1>
              <h1><span className="font-size">{`Cummulative Death Cases: ${filteredCountry[0][1].today_deaths}`}</span></h1>
              <h1><span className="font-size">{`Cummulative Open Cases: ${filteredCountry[0][1].today_open_cases}`}</span></h1>
              <h1><span className="font-size">{`Cummulative Recovered Cases: ${filteredCountry[0][1].today_recovered}`}</span></h1>
            </Card.Body>
          </Card>
        </section>
      </>
    );
  }
  return (
    <>
      <BodyHeader text={`${currentCountry}'s Updates`} />
      <Lining text={`Cummulative Confirmed Cases: ${filteredCountry[0][1].today_confirmed}`} padding="p-3" />
      <section className="bg-dark">
        <Card className="bodyHeader">
          <Card.Body className="d-flex justify-content-center align-items-center flex-column">
            <h1><span className="font-size">{`Cummulative Death Cases: ${filteredCountry[0][1].today_deaths}`}</span></h1>
            <h1><span className="font-size">{`Cummulative Open Cases: ${filteredCountry[0][1].today_open_cases}`}</span></h1>
            <h1><span className="font-size">{`Cummulative Recovered Cases: ${filteredCountry[0][1].today_recovered}`}</span></h1>
          </Card.Body>
        </Card>
        {
          regions.map((region) => (
            <BodyDetail
              key={region.name_es}
              title={region.name}
              cumulativeCases={`Cummulative Cases: ${region.today_confirmed}`}
            />
          ))
        }
      </section>
    </>
  );
};
export default Detail;
