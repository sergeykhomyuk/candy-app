import React from 'react';
import captureException from '../capture-exception';

export interface ErrorBoundaryProps {
  fallback: (error?: Error) => React.ReactNode;
  children: React.ReactNode;
}

export interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error, details: unknown): void {
    this.setState({
      hasError: true,
      error,
    });

    captureException(error, details);
  }

  render(): React.ReactNode {
    const { hasError, error } = this.state;
    const { fallback, children } = this.props;
    if (hasError) {
      return fallback(error);
    }

    return children;
  }
}

export default ErrorBoundary;
