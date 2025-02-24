import { Center, Container, Flex, Heading } from '@chakra-ui/react';
import { UserSelectItem } from '@/features/user-select/user-select-item';
import { IUser, userConfig, useUserStore } from '@/features/user';
import { useNavigate } from 'react-router-dom';
import { routes } from '@/shared/services/routes.services';

export const UserSelect = () => {
    const setUser = useUserStore(state => state.setUser);
    const navigate = useNavigate();

    const onSelectUser = (item: IUser) => {
        setUser(item);
        navigate(routes.main());
    };

    return (
        <Container maxW="container.xl">
            <Center h="100vh">
                <Flex direction="column" gap={4}>
                    <Heading>Выберите аккаунт</Heading>
                    <Flex direction="column" gap={2}>
                        {userConfig.map(item => (
                            <UserSelectItem key={item.id} item={item} onSelect={onSelectUser} />
                        ))}
                    </Flex>
                </Flex>
            </Center>
        </Container>
    );
};
