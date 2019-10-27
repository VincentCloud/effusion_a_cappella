import React from 'react';
import ReactMarkdown from 'react-markdown';

interface INewsPost {
  body: string;
  date: Date;
  title: string;
}

const dateOptions = {
  day: 'numeric',
  month: 'long',
  weekday: 'long',
  year: 'numeric'
};

interface INewsPostProps {
  post: INewsPost;
}

const NewsPost: React.FC<INewsPostProps> = ({ post }) => (
  <div className="App-news-post">
    <div className="App-news-post-header">
      <div>
        <h1>{post.title}</h1>
      </div>
      <div className="App-news-post-date">
        {post.date.toLocaleDateString('en-US', dateOptions)}
      </div>
    </div>
    <ReactMarkdown className="App-markdown-container" source={post.body}/>
    <hr />
  </div>
);

interface INewsProps {
  posts: INewsPost[];
}

const News: React.FC<INewsProps> = ({ posts }) => (
  <div className="App-news-posts">
    {posts.map(post =>
      <NewsPost post={post} key={post.date.getTime()} />
    )}
  </div>
);

export default News;
