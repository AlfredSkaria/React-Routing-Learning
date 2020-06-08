import React, { Component } from 'react';
import './Courses.css';

import Course from '../Course/Course';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    render () {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map( course => {
                            return (
                                <Course
                                    key = {course.id}
                                    title = {course.title}
                                    id = {course.id}
                                />
                            );
                            //<article className="Course" key={course.id}>{course.title}</article>;
                        } )
                    }
                </section>

                
            </div>
        );
    }
}

export default Courses;