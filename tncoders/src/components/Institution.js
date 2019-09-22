import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class Institution extends Component {
 render() {
  const { search, institution } = this.props;
  console.log("TCL: Institution -> render -> search", search)
  return(
    <div classname="card-item">
      {search !== 0 && (
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{institution.name}</Card.Title>
            <Card.Text>
            {institution.rating}
            </Card.Text>
          </Card.Body>
        </Card>
      )}

      </div>
      )
   }
 }



export default Institution;