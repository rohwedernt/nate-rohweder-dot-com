import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import axios from "axios";
import Navigation from './components/Navigation';
import Router from './Router';
import './App.css';


const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Raleway',
      'sans-serif',
    ].join(','),
  },
});

const style = {
  flex: '1 1 auto',
  padding: '30px 60px'
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      id: 0,
      title: null,
      imgSrc: null,
      content: null,
      type: null,
      intervalIsSet: false,
      idToDelete: null,
      idToUpdate: null,
      objectToUpdate: null
    };
  }

  componentDidMount() {
    this.getDataFromDb();
    // if (!this.state.intervalIsSet) {
    //   let interval = setInterval(this.getDataFromDb, 1000);
    //   this.setState({ intervalIsSet: interval });
    // }
  }

  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }

  getDataFromDb = () => {
    fetch(`http://localhost:3000/getPosts`)
      .then(data => data.json())
      .then(res => this.setState({ data: res.data }));
  };

  // putDataToDB = (title, imgSrc, content, type) => {
  //   let currentIds = this.state.data.map(data => data.id);
  //   let idToBeAdded = 0;
  //   while (currentIds.includes(idToBeAdded)) {
  //     ++idToBeAdded;
  //   }

  //   axios.post(`http://naterohweder.com:3001/api/putData`, {
  //     id: idToBeAdded,
  //     title: title,
  //     imgSrc: imgSrc,
  //     content: content,
  //     type: type
  //   });

  //   this.getDataFromDb();
  // };

  // deleteFromDB = idTodelete => {
  //   let objIdToDelete = null;
  //   this.state.data.forEach(dat => {
  //     if (dat.id == idTodelete) {
  //       objIdToDelete = dat._id;
  //     }
  //   });

  //   axios.delete(`http://naterohweder.com:3001/api/deleteData`, {
  //     data: {
  //       id: objIdToDelete
  //     }
  //   });

  //   this.getDataFromDb();
  // };

  // updateDB = (idToUpdate, title, imgSrc, content) => {
  //   let objIdToUpdate = null;
  //   this.state.data.forEach(dat => {
  //     if (dat.id == idToUpdate) {
  //       objIdToUpdate = dat._id;
  //     }
  //   });

  //   axios.post(`http://naterohweder.com:3001/api/updateData`, {
  //     id: objIdToUpdate,
  //     update: { 
  //       title: title,
  //       imgSrc: imgSrc,
  //       content: content
  //     }
  //   });

  //   this.getDataFromDb();
  // };

  handleTitleChange = e => this.setState({ title: e.target.value });

  handleImgSrcChange = e => this.setState({ imgSrc: e.target.value });

  handleContentChange = e => this.setState({ content: e});

  handleIdChange = e => this.setState({ idToDelete: e.target.value });

  handleTypeChange = e => this.setState({ type: e.target.value });

  handleAddPostSubmit = () => this.putDataToDB(this.state.title, this.state.imgSrc, this.state.content, this.state.type);

  handleDeletePostSubmit = () => this.deleteFromDB(this.state.idToDelete);

  handleUpdatePostSubmit = () => this.updateDB(this.state.idToUpdate, this.state.updateToApply);

  render() {
    const routerProps = {
      data: this.state.data,
      handleTitleChange: this.handleTitleChange,
      handleImgSrcChange: this.handleImgSrcChange,
      handleContentChange: this.handleContentChange,
      handleIdChange: this.handleIdChange,
      handleTypeChange: this.handleTypeChange,
      handleAddPostSubmit: this.handleAddPostSubmit.bind(this),
      handleDeletePostSubmit: this.handleDeletePostSubmit.bind(this),
      handleUpdatePostSubmit: this.handleUpdatePostSubmit.bind(this)
    }
    return (
      <div style={{width: '100%'}}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <div style={style}>
            <Navigation />
            <Router routerProps={routerProps}/>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
