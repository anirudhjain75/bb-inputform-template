import React from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import Basic from './Forms/Basic';
import './App.css';
import Relationship from "./Forms/Relationship";
import Physical from "./Forms/Physical";

function App() {
  return (
    <div className="App">
      <Tabs defaultActiveKey="entity" id="base" style={styles.tabs}>
        <Tab eventKey="entity" title={"entity"} style={{marginTop: 5}}>
          <Tabs id="entity" defaultActiveKey={"basic"} style={{marginLeft: 20}}>
            <Tab eventKey={"basic"} title={"Basic Information"}>
              <Basic style={styles.tabContent} />
            </Tab>
            <Tab eventKey={"relationship"} title={"Relationships"}>
              <Relationship style={styles.tabContent} />
            </Tab>
            <Tab eventKey={"physical"} title={"Physical Information"}>
              <Physical style={styles.tabContent}/>
            </Tab>
          </Tabs>
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
    borderColor: "#000",
  },
  tabContent: {
    marginTop: 20,
    textAlign: 'left',
    marginLeft: "10%",
    width: "60%",
  },
};

export default App;
