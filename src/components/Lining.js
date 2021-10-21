import { PropTypes } from 'prop-types';

const Lining = (props) => {
  const { text, padding, classLining } = props;
  return (
    <div className={`${padding} ${classLining}`}>
      <span><strong>{text}</strong></span>
    </div>
  );
};

Lining.defaultProps = {
  padding: 'ps-4',
  classLining: 'lining',
};

Lining.propTypes = {
  text: PropTypes.string.isRequired,
  padding: PropTypes.string,
  classLining: PropTypes.string,
};
export default Lining;
