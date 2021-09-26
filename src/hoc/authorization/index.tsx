import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { StateTypes } from '@/redux/types';
import { useHistory } from 'react-router-dom';

export const authorization = (
  WrappedComponent: React.ComponentType,
): React.ComponentType => {
  const NewComponent = (props: any): JSX.Element => {
    const isAuth = useSelector((state: StateTypes) => state.isAuth);
    const history = useHistory();
    useEffect(() => {
      if (!isAuth) history.push('/signin/');
    });

    return <WrappedComponent {...props} />;
  };

  return NewComponent;
};
