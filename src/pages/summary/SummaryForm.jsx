import React, { useState } from "react";
import { Form, Button, Popover, OverlayTrigger } from "react-bootstrap"

const SummaryForm = () => {
  const [tcChecked, setTcChecked] = useState(false);

  /**
   * This function is sued to handle terms and condition checkbox toggle
   * @param {Event} event 
   * @returns 
   */
  const handleTermsAndConditionToggle = (event) => setTcChecked(event.target.checked);

  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>
        No ice cream will actually be delivered
      </Popover.Body>
    </Popover>
  )

  const checkboxLabel = (
    <span>
      I agree to
      <OverlayTrigger placement="right" overlay={popover}>
        <span style={{ color: 'blue' }}>
          Terms and Conditions
        </span>
      </OverlayTrigger>
    </span>
  );

  return (<Form>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check readOnly onClick={handleTermsAndConditionToggle} type="checkbox" label={
        checkboxLabel
      } />
    </Form.Group>
    <Button variant="primary" type="submit" disabled={!tcChecked}>
      confirm order
    </Button>
  </Form>)
}

export default SummaryForm