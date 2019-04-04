import React, { useState } from 'react';
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
  const [ selectedLevel, setSelectedLevel ] = useState(3);
  const availableLevels = [ 3, 4, 5, 6, 7, 8 ];
  const levelOptions = availableLevels.map((availableLevel) => (
    <option key={availableLevel}>{availableLevel}</option>
  ));
  
  return (
    <Modal isOpen={true} fade={false} toggle={() => {}} centered>
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
              <Input
                type="select"
                name="select"
                id="selectLevel"
                value={selectedLevel}
                onChange={e => setSelectedLevel(e.target.value)}
              >
                {levelOptions}
              </Input>
            </Col>
          </FormGroup>
        </Form>
        <Button
          className="float-right"
          color="success"
          onClick={() => (alert("oh"))}
        >
          Start Game
        </Button>
      </ModalBody>
    </Modal>
  );
};

export default Menu;
