import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"

const ScoopOptions = (props) => {
  const { name, imagePath, updateItemCount } = props;
  const handleChange = event => {
    const { value } = event.target;
    updateItemCount(name, value);
  }

  return (<Col xs={12} sm={6} md={4} style={{ textAlgin: 'center' }}>
    <img
      style={{ width: '75%' }}
      className="img"
      src={`http://localhost:3030/${imagePath}`}
      alt={`${name} scoop`}
    />
    <Form.Group controlId={`${name}-id`} as={Row} style={{ marginTop: `10px` }}>
      <Form.Label column xs="6" style={{ textAlign: 'right' }}>{name}</Form.Label>
      <Col xs="5" style={{ textAlign: "left" }}>
        <Form.Control
          type="number"
          defaultValue={0}
          onChange={handleChange}
        />
      </Col>
    </Form.Group>
  </Col>);
};

export default ScoopOptions;