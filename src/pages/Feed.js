import React, { Component } from "react";

import "./Feed.css";
import more from "../assets/more.svg";
import like from "../assets/like.svg";
import comment from "../assets/comment.svg";
import send from "../assets/send.svg";
class Feed extends Component {
  render() {
    return (
      <section id="post-list">
        <article>
          <header>
            <div className="user-info">
              <span>The Castor</span>
              <span className="place">Rio Claro</span>
            </div>
            <img src={more} alt="Mais" />
          </header>

          <img src="" alt="" />
          <footer>
            <div className="actions">
              <img src={like} alt="" />
              <img src={comment} alt="" />
              <img src={send} alt="" />
            </div>

            <strong>1000 curtidas</strong>

            <p>
              bla bla bla bvla
              <span>#react #react-native #nodejs</span>
            </p>
          </footer>
        </article>
      </section>
    );
  }
}

export default Feed;
