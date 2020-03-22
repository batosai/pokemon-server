import React, { useEffect, useReducer, memo } from 'react';
import Wrapper from './Wrapper';
import init from './init';
import reducer, { initialState } from './reducer';

const OnboardingVideos = () => {
  const [reducerState, dispatch] = useReducer(reducer, initialState, init);
  const { isLoading, isOpen, videos } = reducerState.toJS();

  // Hide the player in case of request error
  if (isLoading) {
    return null;
  }

  return (
    <Wrapper>
    </Wrapper>
  );
};

export default memo(OnboardingVideos);
