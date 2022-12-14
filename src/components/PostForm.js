import React, { useState } from "react";
import PostList from "./PostList";
import { connect } from "react-redux";
import shortid from "shortid";
import { addNote } from "../redux";

function PostForm(props) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const { posts } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    const entry = {
      id: shortid(),
      title: title,
      description: desc,
    };
    props.addNotes(entry);
    setTitle("");
    setDesc("");
  };

  return (
    <div className="bg-secondary">
      <div className="container mt-4 bg-light">
        <h1>Write your Todo's here</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control mb-2 mr-sm-2"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            className="form-control mb-2 mr-sm-2"
            placeholder="Enter Desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <hr />
        <div className="row m-auto">
          {posts.length > 0 ? (
            posts.map((ele, index) => {
              return (
                <PostList
                  key={ele.id}
                  index={index}
                  notid={ele.id}
                  notestitle={ele.title}
                  notesdesc={ele.description}
                />
              );
            })
          ) : (
            <p className="p-4">No Todo's to display</p>
          )}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    posts: state.post,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNotes: (post) => dispatch(addNote(post)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
