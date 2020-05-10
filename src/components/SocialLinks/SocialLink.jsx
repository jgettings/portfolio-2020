import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';

const SocialLink = ({ title, href, children }) => (
  <Tooltip title={title}>
    <IconButton href={href} target="_blank">
      <SvgIcon color="secondary" aria-label={title}>
        {children}
      </SvgIcon>
    </IconButton>
  </Tooltip>
);

SocialLink.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  href: PropTypes.string.isRequired,
};

export default SocialLink;
