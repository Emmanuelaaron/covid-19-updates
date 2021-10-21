import Card from 'react-bootstrap/Card';
import { PropTypes } from 'prop-types';

const BodyHeader = (props) => {
  const { text } = props;

  return (
    <Card className="bodyHeader p-5">
      <Card.Body className="d-flex justify-content-end">
        <h1><strong>{text}</strong></h1>
      </Card.Body>
    </Card>
  );
};

BodyHeader.defaultProps = {
  text: 'Stay Safe!',
};

BodyHeader.propTypes = {
  text: PropTypes.string,
};

export default BodyHeader;
