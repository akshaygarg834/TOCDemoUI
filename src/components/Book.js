import React, { Component } from "react";
import M from "materialize-css";
import Chapter from "./Chapter";
import api from "../services";
import utils from "../utils";

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chapterContent: {},
      chapters: []
    };
  }
  componentDidMount() {
    const options = {
      onOpenStart: ({ id, type }) => {
        if (type === "lesson") {
          return;
        }
        api(`/book/${this.props.bookName}/section/${id}`).then(response => {
          this.setState(prevState => {
            response.response[`${id}`].sort(utils.compareFunction);
            return {
              chapterContent: {
                ...prevState.chapterContent,
                ...response.response
              }
            };
          });
        });
      },
      inDuration: 250,
      outDuration: 250,
      accordion: false
    };

    this.CollapsibleInstance = M.Collapsible.init(this.Collapsible, options);

    api("/book/" + this.props.bookName)
      .then(response => {
        this.setState({
          chapters: response.response.sort(utils.compareFunction)
        });
      })
      .catch(console.error);
  }

  render() {
    return (
      <ul
        className="collapsible popout"
        ref={Collapsible => {
          this.Collapsible = Collapsible;
        }}
      >
        {this.state.chapters.map(chapter => {
          return (
            <Chapter
              key={chapter.id}
              {...chapter}
              chapterContent={this.state.chapterContent[chapter.id] || []}
            />
          );
        })}
      </ul>
    );
  }
}

export default Book;
