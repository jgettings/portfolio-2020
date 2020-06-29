import React from 'react';
import PropTypes from 'prop-types';
import { Container, Chip, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  chipContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

const Developer = ({ icon, title }) => {
  const classes = useStyles();

  return (
    <Container>
      <h2 style={{ textAlign: 'center' }}>
        {icon}
        {' '}
        {title}
      </h2>

      <p>
        What&apos;s with the title? Well, I&apos;ve always officially been a full-stack developer,
        but I&apos;ve always enjoyed working with user interactions and implementing designs, but I
        am also comfortable creating and maintaining APIs, Databases, or MVC backends as necessary.
      </p>
      <p>
        I have held a Senior Developer title in the past but my current title is simply
        &lsquo;Software Developer&rsquo;, as we don&apos;t have seniority designations at Campus
        Labs. I am the most Senior member of my team but over the past year I&apos;ve shifted my
        focus to solely working on the front end. This has allowed me to dive deeper into
        learning about React and make better plans to update our many outdated pages (mostly
        in Backbone). So I think that I am definitely a Senior Full Stack Developer, but when
        you add in more specialized qualifiers like &lsquo;Senior React Developer&rsquo;,
        the Seniority aspect gets a bit hazy.
      </p>
      <h3 style={{ textAlign: 'center' }}>My Current Favorite Tech Stack</h3>
      <div className={classes.chipContainer}>
        <Tooltip title="In late 2016, managment told us we needed to rewrite our entire product and we had to choose between React and Angular (they didn't want more frameworks floating around). We still have a lot of old pages stuck in Angular JS and Backbone, but we're slowly converting everything! I've been using React in every personal project since then because I enjoy it so much. And of course, the addition of hooks makes everything even nicer!">
          <Chip color="primary" label="React" component="a" href="https://reactjs.org/" clickable />
        </Tooltip>
        <Tooltip title="I've only recently started using TypeScript, but I think I'm on board now. I've always been in favor of more strong typing and as much static code analysis as possible, so it's probably more weird that it took me so long to actually try it out.">
          <Chip color="primary" label="TypeScript" component="a" href="https://www.typescriptlang.org/" clickable />
        </Tooltip>
        <Tooltip title="This library is fantastic. I've always thought Redux was a bit weird for api calls. And while I have no problem using Redux, I much prefer this library. It makes use of the hooks api and has a lot of really nice built-in features like caching and refreshing appropriately, prefetching queries for more perceived speed, etc.">
          <Chip color="primary" label="React Query" component="a" href="https://github.com/tannerlinsley/react-query" clickable />
        </Tooltip>
        <Tooltip title="In my day job, we are still using Bootstrap everywhere so I've used React Bootstrap extensively, but when given the choice I usually lean towards Material UI as I like the components a little better. I really like the `jss` pattern of implementing themes and styles, but in a team environment I've been leaning more toward the CSS Module pattern as you still get the benefit of scoped and tree-shaken css, but it's a little more intuitive for designers to be able to edit.">
          <Chip color="primary" label="Material UI" component="a" href="https://material-ui.com/" clickable />
        </Tooltip>
        <Tooltip title="Jest has also been a recent switch for me. The majority of my JS testing experience has been in Mocha/Chai/Enzyme, and I've also used Jasmine and Karma. While I still like Mocha, Jest lets me use Testing Library, which is pretty great.">
          <Chip color="primary" label="Jest" component="a" href="https://jestjs.io/" clickable />
        </Tooltip>
        <Tooltip title="Testing Library is a pretty great tool for testing modern React. It has a lot of support for testing hooks and it has some extensions for `expect` so that you can write much clearer tests. It is opinionated about how to test like a user would use your app, and I think it's really useful!">
          <Chip color="primary" label="Testing Library" component="a" href="https://testing-library.com/" clickable />
        </Tooltip>

        <Tooltip title="I'm not really picky about the backend stack, but .NET Core is very nice to work with in comparison to a lot of the old Framework stuff.">
          <Chip color="secondary" label=".NET Core" />
        </Tooltip>
        <Tooltip title="We still have a lot of things stuck in NHibernate and older Entity Framework, but the things we have been able to move over to EF Core have come together really quickly. I think it's one of the easiest ORMs I've implemented recently.">
          <Chip color="secondary" label="EF Core" />
        </Tooltip>
        <Tooltip
          interactive
          title={(
            <>
              Most testing frameworks are similar, but I really enjoy
              a few of the benefits of NUnit. The most notable, is the
              {' '}
              <a href="https://github.com/nunit/docs/wiki/Values-Attribute" target="_blank" rel="noreferrer" style={{ color: 'white' }}>
                Values Attribute
              </a>
              {' '}
              that you can use to define many test cases in one implementation.
            </>
          )}
        >
          <Chip color="secondary" label="NUnit" />
        </Tooltip>

        <Chip label="Webpack" />
        <Chip label="Eslint" />
        <Chip label="Azure" />
        <Chip label="Azure DevOps" />
      </div>

      <p>
        While this is what I&apos;d use if I had full autonomy,
        I also have no problem adapting to other stacks or individual frameworks.
        And I&apos;ve worked with quite a few during my tenure as
        a software developer. Every new company that I&apos;ve worked
        for has used a different stack (listed below).
      </p>

      <p>
        Regardless of tech stack and product, I think that code
        quality is the most important thing. If a product is flaky,
        users get frustrated and can lose trust in the quality of the
        product very quickly. For the longest time, I&apos;ve been the
        one really pushing for automated tests, especially in new development.
        I&apos;ve worked on a lot of legacy products and I&apos;m comfortable
        writing characterization tests before refactoring/fixing/updating old
        code and I&apos;m also comfortable using TDD from the start of a
        new project.
      </p>

      <p>
        In addition to (and in support of) writing good, clean code, it is
        important to have a good development process. Pull Requests, builds
        that run all of the tests and static code analysis, and how cards and
        tasks get created are all part of creating a good product. Monitoring
        and alerting are also very important so that you can know if something
        goes awry immediately.
      </p>

      <h3 style={{ textAlign: 'center' }}>The Rest of the Alphabet Soup</h3>
      <div className={classes.chipContainer}>
        <Tooltip title="I've used Angular at multiple companies and we have a few features still using AngularJS at Campus Labs">
          <Chip color="primary" label="AngularJS" />
        </Tooltip>
        <Tooltip title="I think CampusLabs is the only place I've used Backbone, but we still have quite a bit of it in my current product.">
          <Chip color="primary" label="Backbone" />
        </Tooltip>
        <Tooltip title="I've used Bootstrap quite a lot on many different projects.">
          <Chip color="primary" label="Bootstrap" />
        </Tooltip>
        <Tooltip title="All of our Backbone pages are currently using Handlebars templates. I've also used Handlebars and Moustache templates elsewhere.">
          <Chip color="primary" label="Handlebars" />
        </Tooltip>
        <Tooltip title="I have used SASS a lot but I also used LESS a lot when these frameworks first became popular.">
          <Chip color="primary" label="SASS" />
        </Tooltip>
        <Tooltip>
          <Chip color="primary" label="NPM" />
        </Tooltip>
        <Tooltip>
          <Chip color="primary" label="Gulp" />
        </Tooltip>
        <Tooltip>
          <Chip color="primary" label="Grunt" />
        </Tooltip>
        <Tooltip>
          <Chip color="primary" label="Bower" />
        </Tooltip>
        <Tooltip>
          <Chip color="primary" label="Application Insights" />
        </Tooltip>
        <Tooltip>
          <Chip color="primary" label="Slack Integrations" />
        </Tooltip>
        <Tooltip>
          <Chip color="primary" label="SQL Server" />
        </Tooltip>

        <Tooltip title="I used Java, Spring, and Hibernate extensively at LocalEdge but that was over 5 years ago so it's not very fresh in my mind!">
          <Chip color="secondary" label="Java" />
        </Tooltip>
        <Chip color="secondary" label="Spring" />
        <Chip color="secondary" label="Hibernate" />
        <Tooltip title="I've done a handful of PHP on and off and I've worked with Symfony and Wordpress a bit as well.">
          <Chip color="secondary" label="PHP" />
        </Tooltip>
        <Tooltip>
          <Chip color="secondary" label="MySQL" />
        </Tooltip>
        <Tooltip>
          <Chip color="secondary" label="Oracle" />
        </Tooltip>
        <Tooltip>
          <Chip color="secondary" label="MongoDB" />
        </Tooltip>
        <Tooltip>
          <Chip color="secondary" label="PostgreSQL" />
        </Tooltip>

        <Tooltip title="I've really only used Selenium very little, but at one point we were moving towards implementing it across our current product. Since then, our team has gotten much smaller and I haven't been able to focus on such large testing efforts. If given the opportunity, I'd probably attempt something similar with Cypress at this point.">
          <Chip label="Selenium" />
        </Tooltip>
        <Tooltip title="I worked on a few features for the Central Park Android app when I worked at Studio LLC. With my Java experience it wasn't too hard to pick up.">
          <Chip label="Android Native" />
        </Tooltip>
      </div>
      <p>
        I&apos;ve worked on a lot of different tech stacks over the years. Hover over some
        of the chips above for more information. Most of these are just things
        I haven&apos;t touched in awhile.
      </p>
    </Container>

  );
};

Developer.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
};

export default Developer;
