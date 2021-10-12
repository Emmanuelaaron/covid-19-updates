import BodyHeader from './BodyHeader';
import BodyCard from './BodyCard';

const Home = () => (
  <>
    <BodyHeader />
    <section className="row">
      <BodyCard text="ArtWorks" bodyClass="artwork" />
      <BodyCard text="Agents" bodyClass="agents" />
      <BodyCard text="places" bodyClass="agents" />
      <BodyCard text="galleries" bodyClass="artwork" />
      <BodyCard text="Exhibitions" bodyClass="artwork" />
      <BodyCard text="Art-work-types" bodyClass="agents" />
    </section>
  </>
);

export default Home;
