import { Button, Center, Flex, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { routes } from '@/shared/services/routes.services';

export const NotFoundPage = () => {
    return (
        <Center minH="100vh">
            <Flex direction="column" align="center" gap="4">
                <Heading>404: Страница не найдена</Heading>
                <Link to={routes.main()}>
                    <Button>На главную</Button>
                </Link>
            </Flex>
        </Center>
    );
};
