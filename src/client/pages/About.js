import React from 'react'
import Post from '../components/Post';


function About(props) {
    const aboutPost = props.routerProps.data.find(x => x.id == '0');
    return <Post postData={aboutPost} />
}

export default About;
