import React from 'react';
import CatagorySummary from '../catagorySummary';
import { Container} from 'reactstrap';

export default props => {
  const { catagories } = props;
  return (
    <Container>
      {
        catagories && catagories.map((cat , index) => {
          return (
            <CatagorySummary catagory ={ cat } key={index}/>
          );
        })
      }
      <div className="clearfix mb-4"></div>
    </Container>
  )
};