import Card from 'react-bootstrap/Card';
import { PropTypes } from 'prop-types';

const BodyHeader = (props) => {
  const { text } = props;

  return (
    <Card className="bodyHeader p-5">
      <Card.Body className="d-flex justify-content-end">
        {text}
      </Card.Body>
    </Card>
  );
};

BodyHeader.defaultProps = {
  text: 'Legit Art',
};

BodyHeader.propTypes = {
  text: PropTypes.string,
};

export default BodyHeader;
