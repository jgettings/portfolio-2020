import React from 'react';
import {
  FaStackOverflow, FaLinkedin, FaGithub, FaInstagram, FaRss, FaCodepen,
} from 'react-icons/fa';
import SocialLink from './SocialLink';
import PluralsightIcon from './pluralsightIcon';

const SocialLinks = () => (
  <div>
    <SocialLink title="My Github Profile" href="https://github.com/jgettings">
      <FaGithub />
    </SocialLink>
    <SocialLink title="My Linkedin Profile" href="https://www.linkedin.com/in/jennifer-gettings-17b2a921">
      <FaLinkedin />
    </SocialLink>
    <SocialLink title="My Stack Overflow Developer Story" href="https://stackoverflow.com/users/story/3062799">
      <FaStackOverflow />
    </SocialLink>
    <SocialLink title="My Codepens" href="https://codepen.io/jengettings">
      <FaCodepen />
    </SocialLink>
    <SocialLink title="My Pluralsight Profile" href="https://app.pluralsight.com/profile/jen-gettings">
      <PluralsightIcon />
    </SocialLink>
    <SocialLink title="My Personal Instagram" href="https://www.instagram.com/pretzelcabin/">
      <FaInstagram />
    </SocialLink>
    <SocialLink title="My DIY Blog" href="https://pretzelcabin.com/">
      <FaRss />
    </SocialLink>
  </div>
);

export default SocialLinks;
