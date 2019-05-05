import React from 'react';
import AdminInput from '../components/AdminInput';
import PostLog from '../components/PostLog';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


ClassicEditor.create(document.querySelector( '#editor'), {
    ckfinder: {
        uploadUrl: '/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files&responseType=json'
    }
} );

function AdminView(props) {
    const {
        data,
        handleTitleChange,
        handleImgSrcChange,
        handleContentChange,
        handleIdChange,
        handleTypeChange,
        handleAddPostSubmit,
        handleDeletePostSubmit,
        handleUpdatePostSubmit
      } = props.routerProps;
    return(
        <div>
            <div style={{ padding: "20px" }}>
            <h3>Add Post</h3>
            <select onChange={handleTypeChange} >
                <option value="" selected disabled hidden>post type</option>
                <option value="code">Code</option>
                <option value="music">Music</option>
                <option value="travel">Travel</option>
                <option value="about">About</option>
            </select>
            <AdminInput onChange={handleTitleChange} placeholder='title' />
            <AdminInput onChange={handleImgSrcChange} placeholder='image' />
            <CKEditor
                editor={ ClassicEditor }
                onChange={ ( event, editor ) => {
                    handleContentChange(editor.getData());
                } }
            />
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

export default AdminView;
