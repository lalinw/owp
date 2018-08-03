// import React from 'react';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    
    // define the internal state of the component
    this.state = {
      listSize: '0', 
      itemNumber: 0, //counter to help delete oldest list item
      list: [] //keep property: itemNumber, name 
    }
  }
  
  // componentWillMount() {
  //   //make API call 

  // }


  render() {
    //need to map?? and then change the element before return 
    
    
    return (
      <div>
        hello
      </div>
    );
  }
}

ReactDOM.render(<SearchResults />, resultsbar);