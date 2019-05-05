import React from 'react';

function AdminInput(props) {
    const { onChange, placeholder } = props;
    return (
        <input
            type="text"
            onChange={onChange}
            placeholder={placeholder}
            style={{ width: "200px", display: "block" }}
      />
    );
  }

export default AdminInput;