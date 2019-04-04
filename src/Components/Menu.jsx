import React from 'react';
import {
  Button,
  Modal,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
  Col,
} from 'reactstrap';

const Menu = () => {
  const levelOptions = [];
  for (let level = 3; level <= 8; level++) {
    levelOptions.push(
      <option key={level}>{level}</option>
    );
  }
  return (
    <Modal isOpen={true} fade={false} toggle={() => (alert("oh"))} centered>
      <ModalBody>
        <h1>
          Towers of Hanoi
        </h1>
        &nbsp;
        <Form>
          <FormGroup row>
            <Col sm={2} />
            <Label for="selectLevel" md={5}>
              <h5>Select level of disks</h5>
            </Label>
            <Col sm={2}>
              <Input type="select" name="select" id="selectLevel">
                {levelOptions}
              </Input>
            </Col>
          </FormGroup>
        </Form>
        <Button className="float-right" color="secondary" onClick={() => (alert("oh"))}>Cancel</Button>
      </ModalBody>
    </Modal>
  );
};

export default Menu;
