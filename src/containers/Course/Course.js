import React, { Component } from "react";

class Course extends Component {

  state={
    courseData: null
  }

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate() {
    this.loadData();
  }


  loadData(){
    if(this.props.match.params.id){
      if(!this.state.courseData || (this.state.courseData && this.state.courseData.match.params.id) !== this.props.match.params.id){
        this.setState({courseData: this.props});
      }
    }
  }

  render() {
    console.log("Course Props: ",this.props);

    let title = <p style={{ textAlign: "center" }}>Please select a Post!</p>;

    if(this.state.courseData){
      const query = new URLSearchParams(this.state.courseData.location.search);
      for(let param of query.entries()){
        title = param[1];
      }
      
    }


    return (
      <div>
          <h1>{title}</h1>
          <p>You selected the Course with ID: {this.props.match.params.id}</p>
      </div>
    );
  }
}

export default Course;
