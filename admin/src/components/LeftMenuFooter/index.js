/**
 *
 * LeftMenuFooter
 *
 */

import React from 'react';
import { defineMessages } from 'react-intl';
import { PropTypes } from 'prop-types';
import Wrapper from './Wrapper';
import messages from './messages.json';

defineMessages(messages);

function LeftMenuFooter({ version, ...rest }) {
  return (
    <Wrapper>
    </Wrapper>
  );
}

LeftMenuFooter.propTypes = {
  version: PropTypes.string.isRequired,
};

export default LeftMenuFooter;
