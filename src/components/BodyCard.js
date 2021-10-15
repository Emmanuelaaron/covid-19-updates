import Card from 'react-bootstrap/Card';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { BsArrowRightCircleFill } from 'react-icons/bs';

const BodyCard = (props) => {
  const {
    text,
    bodyClass,
    handleClickprops,
    path,
    count,
  } = props;

  return (
    <Card className={bodyClass} style={{ width: '50%', height: '150px' }} onClick={() => handleClickprops(text)}>
      <Card.Body className="d-flex flex-column justify-content-between align-items-end" style={{ width: '100%' }}>
        <BsArrowRightCircleFill />
        <Link to={path}>
          {text}
          <br />
          <p className="bg-inf">
            {count}
            <span className="ms-1">Confirmed cases</span>
          </p>
        </Link>
      </Card.Body>
    </Card>
  );
};

BodyCard.propTypes = {
  text: PropTypes.string.isRequired,
  bodyClass: PropTypes.string.isRequired,
  handleClickprops: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default BodyCard;
