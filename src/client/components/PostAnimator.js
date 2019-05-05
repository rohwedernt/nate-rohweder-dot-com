import React from 'react';
import posed, { PoseGroup } from 'react-pose';

const PostAnimatorElement = posed.div({
  enter: {
    y: 0,
    opacity: 1,
    delay: 0,
    transition: {
      y: { type: 'spring', stiffness: 200, damping: 15 },
      default: { duration: 500 }
    }
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: { duration: 150 }
  }
});

class PostAnimator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isVisible: false };
  }

  componentDidMount() {
      this.setState({isVisible: !this.state.isVisible});
  }

  render() {
    const { isVisible } = this.state;

    return (
      <PoseGroup>
        {isVisible && [
          <PostAnimatorElement key="modal" className="modal">{this.props.children}</PostAnimatorElement>
        ]}
      </PoseGroup>
    );
  }
}

export default PostAnimator;