import React from 'react';
import posed from 'react-pose';
import {Github, LinkedIn, Twitter, Facebook, Instagram} from '../icons/icons';


const HomeContentAnimator = posed.div({
  open: {
    y: '0%',
    delayChildren: 0,
    staggerChildren: 150,
    transition: {
        y: { type: 'spring', stiffness: 300, damping: 100 },
        default: { duration: 1000 }
      }
  },
  closed: { y: '-10%', delay: 300 }
});

const styles = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column'
}

class Home extends React.PureComponent {
  state = { isOpen: false };

  componentDidMount() {
    setTimeout(this.toggle, 0);
  }

  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const { isOpen } = this.state;
    return (
        <HomeContentAnimator style={styles} pose={isOpen ? 'open' : 'closed'}>
          <Github target='https://github.com/rohwedernt'/>
          <LinkedIn target='https://www.linkedin.com/in/nate-rohweder-8b1026121/' />
          <Twitter target='https://twitter.com/nrohweder1' />
          <Facebook target='https://www.facebook.com/rohwedernt' />
          <Instagram target='https://www.instagram.com/naterohweder/' />
        </HomeContentAnimator>
    );
  }
}

export default Home