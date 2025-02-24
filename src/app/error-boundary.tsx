import { Component, ReactNode } from 'react';

interface ErrorBoundaryProps {
    children: ReactNode;
    errorFallback: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    render() {
        const { hasError } = this.state;
        const { children, errorFallback } = this.props;

        if (hasError) {
            return errorFallback;
        }

        return children;
    }
}
