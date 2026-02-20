import { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.error('3D Canvas Error:', error, info);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="w-full h-full flex flex-col items-center justify-center gap-4 text-center p-6">
                    <div className="text-[48px]">🖥️</div>
                    <p className="text-secondary text-[14px]">
                        {this.props.fallbackMessage || '3D view unavailable in this browser.'}
                    </p>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
