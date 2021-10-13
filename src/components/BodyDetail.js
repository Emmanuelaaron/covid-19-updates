import Card from 'react-bootstrap/Card';
import { PropTypes } from 'prop-types';
import { BsArrowRightCircleFill } from 'react-icons/bs';

const BodyDetail = (props) => {
  const {
    title,
    mainReferenceNumber,
  } = props;

  return (
    <Card className="cardDetail">
      <Card.Body className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-end">
          {title}
        </div>
        <div className="d-flex align-items-cente justify-content-center">
          {mainReferenceNumber}
          <span className="ms-4"><BsArrowRightCircleFill /></span>
        </div>

      </Card.Body>
    </Card>
  );
};

BodyDetail.propTypes = {
  title: PropTypes.string.isRequired,
  mainReferenceNumber: PropTypes.string.isRequired,
};

export default BodyDetail;
