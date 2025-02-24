import { Button, Flex, Heading, Textarea } from '@chakra-ui/react';
import React, { useState } from 'react';

export const CommentsForm = ({ createNewComment }: { createNewComment: (message: string) => void }) => {
    const [message, setMessage] = useState('');

    const isEmpty = !message.trim();

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);
    };

    const addNewComment = () => {
        if (isEmpty) return;

        createNewComment(message);
        setMessage('');
    };

    return (
        <Flex direction="column" as="section" gap="4">
            <Heading size="md">Написать комментарий</Heading>
            <Textarea
                value={message}
                name="message"
                placeholder="Введите текст комментария..."
                onChange={handleInputChange}
            />
            <Flex mb="6">
                <Button colorScheme="teal" ml="auto" disabled={isEmpty} onClick={addNewComment}>
                    Отправить
                </Button>
            </Flex>
        </Flex>
    );
};
