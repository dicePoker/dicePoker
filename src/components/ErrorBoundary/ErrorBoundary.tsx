import React from 'react';
import PropTypes from 'prop-types';

type Props = {
  children?: JSX.Element;
};

export default class ErrorBoundary extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };
  constructor(props: Props) {
    super(props);
  }

  state = {
    hasError: false,
  };

  componentDidCatch(): void {
    this.setState({ hasError: true });
  }

  render(): JSX.Element {
    if (this.state.hasError) {
      return <h1>Что-то пошло не так, пожалуйста, перезагрузите страницу</h1>;
    }
    return this.props.children as JSX.Element;
  }
}
