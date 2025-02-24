import { ChakraProvider } from '@chakra-ui/react';
import { ErrorBoundary } from './error-boundary';
import { AppRouter } from './app-router';

export function App() {
    return (
        <ErrorBoundary errorFallback={<div>ErrorBoundary</div>}>
            <ChakraProvider>
                <AppRouter />
            </ChakraProvider>
        </ErrorBoundary>
    );
}
