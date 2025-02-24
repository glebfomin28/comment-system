import { Avatar, Box, Flex, Text } from '@chakra-ui/react';
import { IUser } from '@/features/user';

interface IUserSelectItemProps {
    item: IUser;
    onSelect: (item: IUser) => void;
}

export const UserSelectItem = ({ item, onSelect }: IUserSelectItemProps) => {
    return (
        <div onClick={() => onSelect(item)}>
            <Box maxW="sm" borderWidth="1px" borderRadius="2xl" overflow="hidden" padding="2" cursor="pointer">
                <Flex gap="4">
                    <Avatar size="xl" name={item.name} src={item.avatarSrc} />
                    <Flex direction="column">
                        <Text fontWeight="bold" fontSize="2xl">
                            {item.name}
                        </Text>
                    </Flex>
                </Flex>
            </Box>
        </div>
    );
};
