// src/components/CertificateCard.js
import React from 'react';
import { Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';
import './CSS/certificateCard.css'; // Import the CSS for styling

const CertificateCard = ({ title, description, image, pdfLink, linkedCert }) => {
  return (
    <Card shadow={5} style={{ minWidth: '450px', margin: 'auto' }}>
      <div className="hover-image-wrapper">
        <CardTitle
          style={{
            color: 'purple',
            height: '200px',
            background: `url(${image}) center / cover no-repeat`,
          }}
          className="hover-image"
        />
      </div>
      <CardText>
        <strong>{title}</strong>
        <br />
        {description}
      </CardText>
      <CardActions border>
        <a
          href={pdfLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <Button colored>📄 View Certificate</Button>
        </a>
        <a href={pdfLink} download>
          <Button colored>⬇️ Download</Button>
        </a>
        {(linkedCert)? 
          <a href={`${linkedCert}`}  rel="noopener noreferrer" target="_blank">
              <Button colored >🔗 Link</Button>
          </a>
          :
          null
        }
      </CardActions>
    </Card>
  );
};

export default CertificateCard;
