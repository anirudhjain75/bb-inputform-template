import React from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import EntityForm from './Components/EntityForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <Tabs defaultActiveKey="entity1" id="uncontrolled-tab-example" style={styles.tabs}>
        <Tab eventKey="entity1" title="Entity1">
          <EntityForm />
        </Tab>
        <Tab eventKey="add" title="+">
          <p>{"Add"}</p>
        </Tab>
      </Tabs>
    </div>
  );
}

const styles = {
  tabs: {
    marginRight: 20,
    marginLeft: 20,
    borderWidth: 1,
  }
}

export default App;
