import React from "react";
import "../App.css";
import { Card, Container, Row } from "react-bootstrap";
import Button from "./Button";
import {useHistory, Route, BrowserRouter as Router } from "react-router-dom";
import { Link } from 'react-router-dom';

export default class FetchUser extends React.Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

 

  async componentDidMount() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const json = await response.json();
    this.setState({ data: json });
  }

  render() {
    return (
      <div className="row">
      
        {this.state.data.map((el) => (
          <div className="cardDiv" key={el.id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" />
              <Card.Body>
                <Card.Title>
                  <h1 className="contactName">{el.name[0]}</h1>
                </Card.Title>
                <Card.Text>
                  <strong>{el.name}</strong>
                </Card.Text>
                <Card.Text><i>@{el.username}</i></Card.Text>
                <Card.Text>
                  <a href="#">
                    <u>{el.email}</u>
                  </a>
                </Card.Text>
              <Button id={el.id}/>
              </Card.Body>
            </Card>
           
          </div>
        ))}
        
      </div>
    );
  }
}
