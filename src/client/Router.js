import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/AdminAuth';
import About from './pages/About';
import PostViewer from './components/PostViewer';
import Post from './components/Post';
import { Security, ImplicitCallback } from '@okta/okta-react';


const config = {
    issuer: 'https://dev-577962.okta.com/oauth2/default',
    redirect_uri: window.location.origin + '/implicit/callback',
    client_id: '0oah0k2lwujlUlv1n356'
  }

class Router extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentPostId: null };
      }

    setCurrentPostId = id => {this.setState({ currentPostId: id })}

    render() {
        let currentPost = this.props.routerProps.data.find(x => x.id == this.state.currentPostId);
        return(
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/home" component={Home} />
                <Route 
                    path='/about'
                    render={() => <About {...this.props} />}
                />
                <Route 
                    path='/codeStuff'
                    render={() => <PostViewer {...this.props} setId={this.setCurrentPostId} postType='code' />}
                />
                <Route 
                    path='/musicStuff'
                    render={() => <PostViewer {...this.props} setId={this.setCurrentPostId} postType='music' />}
                />
                <Route 
                    path='/travelstuff'
                    render={() => <PostViewer {...this.props} setId={this.setCurrentPostId} postType='travel' />}
                />
                <Route 
                    path='/post/:id'
                    render={() => <Post postData={currentPost} />}
                />

                <Security issuer={config.issuer} client_id={config.client_id} redirect_uri={config.redirect_uri}>
                    <Route path='/admin' render={() => <Admin {...this.props} />}/>
                    <Route path='/implicit/callback' component={ImplicitCallback}/>
                </Security>
            </Switch>
        );
    }
  }

export default Router;
