import { ChakraProvider } from '@chakra-ui/react';
import { ErrorBoundary } from './error-boundary';
import { ErrorBoundaryPage } from '@/pages/error-boundary-page';
import { AppRouter } from './app-router';

export function App() {
    return (
        <ErrorBoundary errorFallback={<ErrorBoundaryPage />}>
            <ChakraProvider>
                <AppRouter />
            </ChakraProvider>
        </ErrorBoundary>
    );
}
