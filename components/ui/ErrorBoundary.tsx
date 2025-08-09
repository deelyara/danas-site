'use client';

import React from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Only log non-hydration errors
    if (!error.message.includes('Hydration') && !error.message.includes('hydration')) {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }
  }

  componentDidMount() {
    // Reset error state on mount (helps with hydration issues)
    if (this.state.hasError) {
      this.setState({ hasError: false });
    }
  }

  render() {
    if (this.state.hasError) {
      // Return fallback UI or children (for hydration errors, just show children)
      if (this.state.error?.message.includes('Hydration') || this.state.error?.message.includes('hydration')) {
        return this.props.children;
      }
      
      return this.props.fallback || (
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="text-center">
            <h2 className="text-2xl font-serif text-primary mb-4">Something went wrong</h2>
            <p className="text-secondary mb-6">We&rsquo;re working to fix this issue.</p>
            <button 
              onClick={() => this.setState({ hasError: false })}
              className="px-6 py-2 bg-accent text-background rounded hover:bg-accent/90 transition-colors"
            >
              Try again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 