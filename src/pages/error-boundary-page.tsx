import { Button, Center, Flex, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { routes } from '@/shared/services/routes.services';

export const ErrorBoundaryPage = () => {
    return (
        <Center minH="100vh">
            <Flex direction="column" align="center" gap="4">
                <Heading color="red">Ошибка. Что-то пошло не так...</Heading>
                <Link to={routes.main()}>
                    <Button>На главную</Button>
                </Link>
            </Flex>
        </Center>
    );
};
