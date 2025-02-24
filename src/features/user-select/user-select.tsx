import { useNavigate } from 'react-router-dom';
import { Container, Flex, Heading } from '@chakra-ui/react';
import { UserSelectItem } from '@/features/user-select/user-select-item';
import { IUser, userConfig, useUserStore } from '@/features/user';
import { routes } from '@/shared/services/routes.services';

export const UserSelect = () => {
    const setUser = useUserStore(state => state.setUser);
    const navigate = useNavigate();

    const onSelectUser = (item: IUser) => {
        setUser(item);
        navigate(routes.main());
    };

    return (
        <Container maxW="container.xl" padding="8">
            <Flex direction="column" gap="8" justify="center" align="center">
                <Heading>Выберите аккаунт</Heading>
                <Flex gap={2} wrap="wrap" justify="center" align="center">
                    {userConfig.map(item => (
                        <UserSelectItem key={item.id} item={item} onSelect={onSelectUser} />
                    ))}
                </Flex>
            </Flex>
        </Container>
    );
};
