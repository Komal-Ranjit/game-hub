import { Badge, colorScheme } from '@chakra-ui/react';

interface Props{
    score: number;
}

const CriticScore = ({score}: Props) => {
    let color = score >75 ? 'green' : score > 60 ? 'yellow' : '';

    return (
            <Badge colorScheme= {color} fontSize='14px' paddingX={2} borderRadius='5px'>
                {score}
            </Badge>
    )
}

interface Props{
    score: number;
}

export default CriticScore
