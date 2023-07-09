
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../Css/VideoUpload.css'
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';

const VideoUpload = () => {
    const [videoName, setVideoName] = useState('');
    const [videoURL, setVideoURL] = useState('');
    const [pptLink, setPPTLink] = useState('');
    const [workbookLink, setWorkbookLink] = useState('');
    const [selectedClass, setSelectedClass] = useState('');
    const [tags, setTags] = useState([]);

    const handleSubmit = (e) => {
      e.preventDefault();
      // Perform any desired actions with the form data
      // For example, send the data to an API or update the state of the parent component
      console.log('Video Name:', videoName);
      console.log('Video URL:', videoURL);
      console.log('PPT Link:', pptLink);
      console.log('Workbook Link:', workbookLink);
      console.log('Selected Class:', selectedClass);
      console.log('Tags:', tags);
  
      // Reset the form fields
      setVideoName('');
      setVideoURL('');
      setPPTLink('');
      setWorkbookLink('');
      setSelectedClass('');
      setTags([]);
    };
  
    return (
        <div className="container">
      <Form className="form-container" onSubmit={handleSubmit}>
        <Form.Group className="slot" controlId="videoName">
          <Form.Label>Video Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter video name"
            value={videoName}
            onChange={(e) => setVideoName(e.target.value)}
          />
        </Form.Group>
  
        <Form.Group className="slot" controlId="videoURL">
          <Form.Label>Video URL</Form.Label>
          <Form.Control
            required
            type="url"
            placeholder="Enter video URL"
            value={videoURL}
            onChange={(e) => setVideoURL(e.target.value)}
          />
        </Form.Group>
  
        <Form.Group className="slot" controlId="pptLink">
          <Form.Label>PPT Link</Form.Label>
          <Form.Control
            type="url"
            placeholder="Enter PPT link"
            value={pptLink}
            onChange={(e) => setPPTLink(e.target.value)}
          />
        </Form.Group>
  
        <Form.Group className="slot" controlId="workbookLink">
          <Form.Label>Workbook Link</Form.Label>
          <Form.Control
            type="url"
            placeholder="Enter workbook link"
            value={workbookLink}
            onChange={(e) => setWorkbookLink(e.target.value)}
          />
        </Form.Group>

        <Form.Group  className="slot" controlId="classSelect">
        <Form.Label>Class</Form.Label>
        <Form.Select
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
        >
          <option value="">Select a class</option>
          {[...Array(12)].map((_, index) => (
            <option key={index + 1} value={index + 1}>
              Class {index + 1}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <Form.Group className="slot" controlId="tagsInput">
        <Form.Label>Tags</Form.Label>
        <TagsInput value={tags} onChange={(newTags) => setTags(newTags)} />
      </Form.Group>
  
        <Button className="btncss" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
</div>
    );
}

export default VideoUpload