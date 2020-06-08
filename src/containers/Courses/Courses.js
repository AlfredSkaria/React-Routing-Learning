import React, { Component } from 'react';
import './Courses.css';

import Course from '../Course/Course';
import { Route } from 'react-router-dom';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    postSelectedHandler = (id,title) => {
        console.log("post id: ",id," is clicked");
        this.props.history.push('/courses/' + id);
        this.props.history.push('?title='+title)
        // <Course
        //     key = {id}
        //     //title = {course.title}
        //     id = {id}
        // />
    }

    render () {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map( course => {
                            return (
                                <article className="Course" key={course.id} onClick={ () => this.postSelectedHandler(course.id, course.title)}>{course.title}</article>
                            );
                            
                        } )
                    }
                </section>
                <Route path={this.props.match.url + '/:id'}  exact component={Course}/>
                
            </div>
        );
    }
}

export default Courses;