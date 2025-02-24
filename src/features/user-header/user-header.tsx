import { Avatar, Button, Flex, Text } from '@chakra-ui/react';
import { useUserStore } from '@/features/user';

export const UserHeader = () => {
    const user = useUserStore(state => state.user);
    const logout = useUserStore(state => state.logout);

    if (!user) return null;

    return (
        <Flex justify="space-between" align="center">
            <Flex align="center" gap="4">
                <Avatar name={user.name} src={user.avatarSrc} />
                <Text fontWeight="bold">{user.name}</Text>
            </Flex>
            <Button onClick={logout} variant="ghost" colorScheme="red">
                Выйти
            </Button>
        </Flex>
    );
};
