import Card from 'react-bootstrap/Card';
import { PropTypes } from 'prop-types';
import { BsArrowRightCircleFill } from 'react-icons/bs';

const BodyCard = (props) => {
  const { text, bodyClass } = props;

  return (
    <Card className={bodyClass} style={{ width: '50%', height: '150px' }}>
      <Card.Body className="d-flex flex-column justify-content-between align-items-end" style={{ width: '100%' }}>
        <BsArrowRightCircleFill />
        {text}
      </Card.Body>
    </Card>
  );
};

BodyCard.propTypes = {
  text: PropTypes.string.isRequired,
  bodyClass: PropTypes.string.isRequired,
};

export default BodyCard;
