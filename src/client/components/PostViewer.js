import React from 'react';
import posed from 'react-pose';
import PostCard from './PostCard';


const PostViewerAnimator = posed.ul({
  open: {
    y: 0,
    delayChildren: 0,
    staggerChildren: 75,
    transition: {
        y: { type: 'spring', stiffness: 500, damping: 15 },
        default: { duration: 3000 }
      }
  },
  closed: { y: 20 }
});

const PostCardAnimator = posed.div({
  open: { y: 0, opacity: 1 },
  closed: { y: 0, opacity: 0, transition: { duration: 50 } }
});

class PostViewer extends React.PureComponent {
  state = { isOpen: false };

  componentDidMount() {
    this.toggle();
  }

  componentWillReceiveProps() {
    this.setState({ isOpen: false });
    setTimeout(this.toggle, 500);
  }

  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    if(this.props.routerProps.data) {
        const { isOpen } = this.state;
        let data = this.props.routerProps.data.filter(x => x.type == this.props.postType);
        return (
          <PostViewerAnimator pose={isOpen ? 'open' : 'closed'}>
            {data.length <= 0 ? "NO POSTS FOUND" : data.map(dat => (
                <PostCardAnimator className="item">
                    <PostCard 
                      {...this.props} 
                      postId={dat.id} 
                      image={dat.imgSrc} 
                      title={dat.title} 
                      desc="This is a sample code post about some unbelievable feat accompished in computer science"
                    />
                </PostCardAnimator>
            ))}
          </PostViewerAnimator>
        );
    } else return <div />

  }
}

export default PostViewer
