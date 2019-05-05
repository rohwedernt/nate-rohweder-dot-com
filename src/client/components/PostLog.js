import React from 'react';

function PostLog(props) {
    const { data } = props
    return(
        <ul>
            {data.length <= 0
                ? "NO POSTS FOUND"
                : data.map(dat => (
                    <li style={{ padding: "10px" }} key={data.message}>
                        <span style={{ color: "gray" }}> id: </span> {dat.id} <br />
                        <span style={{ color: "gray" }}> type: </span> {dat.type} <br />
                        <span style={{ color: "gray" }}> title: </span> {dat.title} <br />
                        <span style={{ color: "gray" }}> img: </span> {dat.imgSrc} <br />
                        <span style={{ color: "gray" }}> content: </span> {dat.content} <br />
                    </li>
            ))}
        </ul>
    );
}

export default PostLog;