import React, { useState } from "react";
import { Button, Modal, Form } from "reactstrap";

function AddMovieModal({ show, setShow, addMovie }) {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [value, setValue] = useState({
    Title: "",
    Year: "",
    PosterURL: "",
    rating: "",
  });

  return (
    <>
      <Modal show={show} onHide={handleShow} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Movie name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Title"
                value={value.Title}
                onChange={(e) => setValue({ ...value, Title: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Year</Form.Label>
              <Form.Control
                type="year"
                placeholder="Year"
                value={value.Year}
                onChange={(e) => setValue({ ...value, Year: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="url"
                placeholder="Poster URL"
                value={value.PosterURL}
                onChange={(e) =>
                  setValue({ ...value, PosterURL: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Rating</Form.Label>
              <Form.Control
                type="rating"
                placeholder="Rating"
                value={value.rating}
                onChange={(e) => setValue({ ...value, rating: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => addMovie(value)}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddMovieModal;
