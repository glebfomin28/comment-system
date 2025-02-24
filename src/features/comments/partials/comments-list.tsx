import { Avatar, Box, Button, Card, Flex, Heading, Text } from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { IComment, TRatingDirection } from '../domain/comments.domain';
import { formatCommentDate } from '../comments.utilities';

interface ICommentsListProps {
    comments: IComment[];
    currentUserId: string;
    removeComment: (id: number) => void;
    collapsedComment: (id: number) => void;
    incrementRating: (id: number) => void;
    decrementRating: (id: number) => void;
}

export const CommentsList = ({
    comments,
    currentUserId,
    removeComment,
    collapsedComment,
    incrementRating,
    decrementRating
}: ICommentsListProps) => {
    const getTagColorScheme = (currentDirection: TRatingDirection, direction: TRatingDirection): string =>
        currentDirection === direction ? 'solid' : 'ghost';

    return (
        <Flex direction="column" gap="4" mt="4">
            <Heading size="md">Комментарии</Heading>
            {!comments?.length && <Text align="center">Здесь пока пусто. Напишите комментарий.</Text>}
            {comments?.map(comment => {
                if (comment.isCollapsed) {
                    return (
                        <Card key={comment.id} onClick={() => collapsedComment(comment.id)}>
                            <Box borderWidth="1px" borderRadius="xl" overflow="hidden" padding="2" bg="cyan.50">
                                <Text key={comment.id} fontSize="sm" fontWeight="bold" cursor="pointer">
                                    Открыть комментарий
                                </Text>
                            </Box>
                        </Card>
                    );
                }

                return (
                    <Box
                        key={comment.id}
                        borderWidth="1px"
                        borderRadius="xl"
                        overflow="hidden"
                        padding="2"
                        bg="cyan.50"
                    >
                        <Flex gap="2" direction="column">
                            <Flex align="center" gap="2">
                                <Avatar size="sm" name={comment.author.name} src={comment.author.avatarSrc} />
                                <Text fontSize="sm" fontWeight="bold">
                                    {comment.author.name}
                                </Text>
                                {comment.author.id === currentUserId && (
                                    <Button
                                        size="xs"
                                        variant="ghost"
                                        colorScheme="red"
                                        marginLeft="auto"
                                        onClick={() => removeComment(comment.id)}
                                    >
                                        Удалить
                                    </Button>
                                )}
                            </Flex>
                            <Text fontSize="xl">{comment.message}</Text>
                            <Flex justify="space-between" align="center">
                                <Flex align="center" gap="1">
                                    <Button
                                        leftIcon={<MinusIcon />}
                                        aria-label="Revoke rating"
                                        size="xs"
                                        colorScheme="red"
                                        variant={getTagColorScheme(comment.ratingUserHistory[currentUserId], 'down')}
                                        onClick={() => decrementRating(comment.id)}
                                    >
                                        {comment.rating.down}
                                    </Button>
                                    <Button
                                        leftIcon={<AddIcon />}
                                        aria-label="Add a rating"
                                        size="xs"
                                        colorScheme="cyan"
                                        variant={getTagColorScheme(comment.ratingUserHistory[currentUserId], 'up')}
                                        onClick={() => incrementRating(comment.id)}
                                    >
                                        {comment.rating.up}
                                    </Button>
                                </Flex>
                                <Text color="gray.500" fontSize="xs">
                                    {formatCommentDate(comment.date)}
                                </Text>
                            </Flex>
                        </Flex>
                    </Box>
                );
            })}
        </Flex>
    );
};
