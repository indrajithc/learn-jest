import React, { useState } from "react";
import { Form, Button } from "react-bootstrap"

const SummaryForm = () => {
  const [tcChecked, setTcChecked] = useState(false);

  const handleTermsAndConditionToggle = (event) => setTcChecked(event.target.checked);

  return (<Form>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check readOnly onClick={handleTermsAndConditionToggle} type="checkbox" label="terms and conditions" />
    </Form.Group>
    <Button variant="primary" type="submit" disabled={!tcChecked}>
      confirm order
    </Button>
  </Form>)
}

export default SummaryForm