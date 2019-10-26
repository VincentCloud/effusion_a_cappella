import React from 'react';
import ReactMarkdown from 'react-markdown';

interface INewsPost {
  body: string;
  date: Date;
  title: string;
}
const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

const newsPosts = [
  {
    body: `
After hearing around 150 auditions and some very difficult deliberations,
we have reached a decision on who will be called back. Thank you to everyone
who auditioned, and **congratulations to the following people on being invited
Effusion A Cappella’s Fall 2019 Callbacks:**

Abbi Baran  
Rebecca Chen  
Sarah Garreston  
Paige Murray  
Clemence Taisne  
Sarah Sundara  
Natalia Popovska  
Sonja Hagglund  
Jillian Tam  
Daniel Luo  
Jacob Peng  
Ugo Umeano  
Samer Girgis  
Jared Warden-Joseph  
Edgard Ngalissamy  
Terence Liu  
Ben Posedi  
Victor Wang  

**Callbacks will be held on the evening of Tuesday, September 17th.
Please email us at info.effusion@gmail.com by the end of today to confirm
that you are able to join us for callbacks.** We will then provide you with
more information on what you need to prepare.
`,
    date: new Date('Sept 16 2019'),
    title: 'Fall 2019 Callbacks List'
  },
  {
    body: `
### IT’S THAT TIME OF YEAR AGAIN! EFFUSION A CAPPELLA IS HOLDING ITS FALL 2019 AUDITIONS.
**Audition time slot sign ups** will take place at Activities Night (September 11th & 12th, 4-8 pm, Tomlinson Field House – 475 Pine Ave. W).

**The auditions will be held on***:

September 13th: 4:00 pm – 9:00 pm  
September 14th: 8:30 am – 12:30 pm  
September 15th: 8:30 am – 5 pm  
The exact location of the auditions will be given upon sign up, but they will take place only a few blocks from McGill campus.

**What you need to prepare for your audition:**

All we need from you is a ~1 minute prepared excerpt of a song of your choice, so be sure to choose a song that showcases your voice and what you can bring to the group. If you can beatbox, we’d love to hear that as well.

**There is an additional audition date taking place on September 8th for those who already signed up at Discover McGill. All others should sign up at Activities Night and will audition on one of the three dates listed above.*
`,
    date: new Date('Aug 22 2019'),
    title: 'Fall 2019 Auditions!'
  }
];

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

const News: React.FC = () => (
  <div className="App-news-posts">
    {newsPosts.map(post =>
      <NewsPost post={post} key={post.date.getTime()} />
    )}
  </div>
);

export default News;
