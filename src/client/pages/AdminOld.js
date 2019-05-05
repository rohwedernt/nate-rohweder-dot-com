import React, { Component } from "react";
import AdminInput from '../components/AdminInput';
import PostLog from '../components/PostLog';


class AdminOld extends Component {
  render() {
    const {
      data,
      handleTitleChange,
      handleImgSrcChange,
      handleContentChange,
      handleIdChange,
      handleAddPostSubmit,
      handleDeletePostSubmit,
      handleUpdatePostSubmit
    } = this.props.routerProps;
    
    return (
      <div>
        <div style={{ padding: "20px" }}>
          <h3>Add Post</h3>
          <AdminInput onChange={handleTitleChange} placeholder='title' />
          <AdminInput onChange={handleImgSrcChange} placeholder='image' />
          <AdminInput onChange={handleContentChange} placeholder='content' />
          <select>
            <option value="code">Code</option>
            <option value="music">Music</option>
            <option value="beer">Craft Beer</option>
            <option value="travel">Travel</option>
            <option value="about">About</option>
          </select>
          <button onClick={handleAddPostSubmit}>
            ADD
          </button>
        </div>

        <div style={{ padding: "20px" }}>
          <h3>Remove Post</h3>
          <AdminInput onChange={handleIdChange} placeholder='id' />
          <button onClick={handleDeletePostSubmit}>
            DELETE
          </button>
        </div>

        <div style={{ padding: "20px" }}>
          <h3>Edit Post</h3>
          <AdminInput onChange={handleIdChange} placeholder='id' />
          <AdminInput onChange={handleTitleChange} placeholder='title' />
          <AdminInput onChange={handleImgSrcChange} placeholder='image' />
          <AdminInput onChange={handleContentChange} placeholder='content' />
          <button onClick={handleUpdatePostSubmit}>
            UPDATE
          </button>
        </div>
        <h3>Posts</h3>
        <PostLog data={data} />
      </div>
    );
  }
}

export default AdminOld;
