import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => (
  <div>
    <h1>about</h1>
    <p>
      Formed in 1999, Effusion started off a small and humble group of musical
      geniuses who laid a foundation of soul haunting repertoire and
      mind-numbing good looks for future generations to build upon. {
      new Date().getFullYear() - 1999} years, 3 CDs, and countless roadtrips
      later, Effusion is still laughing, good-time-ing, and making sweet a
      cappella.
    </p>
    <p>
      Effusion performs at events, soirees, dinners, festivals, and student
      functions in and around Montreal, QC. We also take time our from our busy
      schedules to travel around Canada and the US to collaborate and perform
      with other a cappella groups, bands, and musicians of all sorts.
    </p>
    <p>
      Music without instruments is our passion and we draw our influences from
      across the musical spectrum. R&amp;B, soul, gospel, pop, folk, rock, and
      jazz influences can all be heard in our repertoire. Besides singing,
      Effusion has been known for many a memorable skit at end-of-semester
      concerts and for questionable dance skills.
    </p>
    <p>
      Want to find out more about the group? Click on to our
      {' '}<Link to="/members">members</Link>{' '}
      page or send us an email!
    </p>
    <h1>reviews</h1>
    <blockquote>
      <p>
        <q>
          Unless you are McGill University&apos;s Effusion, and your blend is
          so absolutely unbelievable that you don&apos;t need to dance around to
          superficially surprise an audience. Indeed, their sound was so
          magnificent
          that I&apos;m pretty sure I stopped breathing for a while.
        </q>
      </p>
      <footer>Doug Friedman [Brandeis VoiceMale]</footer>
    </blockquote>
    <blockquote>
      <p>
        <q>
          When Effusion started singing, I had trouble holding my camera
          straight because I just wanted to watch and enjoy&hellip; something
          about this group caught me off guard&hellip; You know when a person
          goes into a zone, they get lost in their own little world? This was
          like watching a group of people get lost in their own little
          &lsquo;group world&rsquo;
        </q>
      </p>
      <footer>Abid Virani [Abid Virani: In Words]</footer>
    </blockquote>
    <blockquote>
      <p>
        <q>
          It&apos;s like church choir, except without the church and they have
          no god, but they're not total heathens. It's good. Yes. That's
          perfect.
        </q>
      </p>
      <footer>Julie Phan [Governor's General Literary Award Winner]</footer>
    </blockquote>
  </div>
);

export default About;
