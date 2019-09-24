import React from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay, CardFooter } from 'reactstrap';

const ThemeCardTwo = ({ story: { storyImage, user, userImage, views, title, desc } }) => {
  return (
    <div className="mb-3">
      <Card inverse className="theme-2">
        <div className="wrraper">
          <CardImg width="100%" src={storyImage} alt="Card image cap" />
          <div className="overlay">
            <img src={userImage} alt="auther Img" />
            <CardText className="theme-text-small">
                <span>{user} </span>
                <span className="views"><i className=" fa fa-eye"></i> {views}</span>
            </CardText>
          </div>
        </div>
      </Card>
      <CardFooter className="text-muted">
          <CardText>{title} : {desc}</CardText>
      </CardFooter>
    </div>
  );
}

export default ThemeCardTwo;
