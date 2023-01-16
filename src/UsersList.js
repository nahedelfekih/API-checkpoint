import React from "react";
import { Card } from "react-bootstrap";

function UsersList({ users }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
       <Card.Title>{users.username}</Card.Title>
       <Card.Text>{users.email}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default UsersList;