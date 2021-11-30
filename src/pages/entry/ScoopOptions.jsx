import Col from "react-bootstrap/Col"

const ScoopOptions = (props) => {
  const { name, imagePath } = props;
  return (<Col xs={12} sm={6} md={4} style={{ textAlgin: 'center' }}>
    <img
      style={{ width: '75%' }}
      className="img"
      src={`http://localhost:3030/${imagePath}`}
      alt={`${name} scoop`}
    />
  </Col>);
};

export default ScoopOptions;