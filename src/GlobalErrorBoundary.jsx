import React from 'react';

/* eslint-disable react/prop-types */

// General error boundary for now, this should be more specific later
class GeneralErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.warn(error); // eslint-disable-line no-console
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (!hasError) {
      return children;
    }

    return (
      <div style={{ padding: 10 }}>
        There was an error. Please refresh the page and try again.
      </div>
    );
  }
}

export default GeneralErrorBoundary;
