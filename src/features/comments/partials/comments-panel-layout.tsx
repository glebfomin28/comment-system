import { Container, Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface ICommentsPanelProps {
    header: ReactNode;
    children: ReactNode;
}

export const CommentsPanelLayout = ({ children, header }: ICommentsPanelProps) => {
    return (
        <div>
            <Flex as="header" bg="cyan.100">
                <Container maxW="container.xl" padding="2">
                    {header}
                </Container>
            </Flex>
            <Container maxW="container.lg" padding="4" as="main">
                {children}
            </Container>
        </div>
    );
};
