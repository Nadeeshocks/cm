import React , {Component}from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Form, ListGroup, Input,ListGroupItem } from 'reactstrap';

class Search extends Component {

    state={
        searchText : "",
        locationText : "",
        locationTextSuggestions : [],
        searchTextSuggestions : []
    }

    onSearchTextChange = (value) => {
        const text =  value.target.value
        const { catagories } = this.props;
        if(text) {
          let pattern = new RegExp(text, 'ig')
          const suggestions = ( catagories || []).map(cat => cat.cat_name);
          let searchTextSuggestions = suggestions.filter((s) => s.search(pattern) > -1);
          this.setState({
            searchText: text,
            searchTextSuggestions
          });
        } else {
          this.setState({
            searchText: '',
            searchTextSuggestions: []
          });
        }
      }
    
      onLocationChange = (value) => {
        const text =  value.target.value
        const { locations } = this.props;
        if(text) {
          let pattern = new RegExp(text, 'ig')
          let locationTextSuggestions = locations.filter((s) => s.search(pattern) > -1);
    
          this.setState({
            locationText: text,
            locationTextSuggestions
          });
        } else {
          this.setState({
            locationText: '',
            locationTextSuggestions: []
          });
        }
      }
    
      selectSearchSuggestion = (suggestion) => {
        this.setState({
          searchText: suggestion,
          searchTextSuggestions: []
        })
      }
    
      selectLocationSuggestion = (suggestion) => {
        this.setState({
          locationText: suggestion,
          locationTextSuggestions: []
        })
      }



  render() {
    const { searchText , locationText ,locationTextSuggestions, searchTextSuggestions} = this.state;
    const searchSuggestions = searchTextSuggestions.map((suggestion) => <ListGroupItem onClick={() => this.selectSearchSuggestion(suggestion)}>{suggestion}</ListGroupItem>);
    const locationSuggestions = locationTextSuggestions.map((suggestion) => <ListGroupItem onClick={() => this.selectLocationSuggestion(suggestion)}>{suggestion}</ListGroupItem>);
    return (
        <Container className="centered-content">
            <Row>
                <Col>
                    <div className="logo" >
                        <img src={'/images/Logo.svg'} alt="" />
                    </div>

                    <div className="title">Find Creative Tools Around You</div>

                    <p className="desc">
                        <span >Creative market is a community </span>&nbsp;
                <span className="bold">for creators, by creators.</span>
                    </p>

                    <p className="theme-text-small rent-categories">
                        Rent &nbsp;
                <button className="theme-btn theme-btn-primary-light">

                            <img src={'/images/Icons/Tags/Photo/Default.svg'} alt="drone" />
                            <Link to="/">Cameras</Link>

                        </button>
                        <button className="theme-btn theme-btn-primary-light">

                            <img src={'/images/Icons/Tags/Drone/Default.svg '} alt="drone" />
                            <Link to="/">Drones</Link>

                        </button>
                        <button className="theme-btn theme-btn-primary-light">

                            <img src={'/images/Icons/Tags/Lights/Default.svg '} alt="drone" />
                            <Link to="/"> Lights </Link>

                        </button> &nbsp;
                        and more from people around you
        
              </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form className="theme-form">
                        <div className="search-input">
                          <div className="field">
                            <input 
                              id="gearSearch" 
                              className="validate" 
                              type="text" 
                              onChange={this.onSearchTextChange} 
                              value={searchText}
                              placeholder="Search Here"/>
                            <label for="gearSearch">Gear</label>
                          </div>
                            <ListGroup className="search-suggestions">
                                {
                                    searchSuggestions
                                }
                            </ListGroup>
                        </div>
                        <div className="location-input">
                        <div className="field">
                            <input  id="locationSearch" 
                            placeholder="Search Here"
                            className="validate" 
                            icon="fa-map-marker"  
                            type="text" 
                            label="Location" 
                            onChange={this.onLocationChange} 
                            value={locationText}/>
                            <label for="locationSearch">Location</label>
                          </div>
                            <ListGroup className="search-suggestions">
                                {
                                    locationSuggestions
                                }
                            </ListGroup>
                        </div>
                        <button className="theme-btn theme-btn-filled-white" onClick={this.onSearch}>
                            <span className="fa fa-search"></span>
                        </button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )}
}


export default Search