import useGenres, { Genre } from '../hooks/useGenres';
import { List, ListItem , HStack, Image, Button, Spinner, Heading} from '@chakra-ui/react';
import getCroppedImageUrl from '../services/image-url';

interface Props{
    onSelectedGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({selectedGenre, onSelectedGenre} : Props) => {

    const {data, isLoading, error} =   useGenres();

    if(error) return null;

    if(isLoading) return <Spinner />
    return (
        <>
        <Heading fontSize='2xl' marginBottom={3}>Genre</Heading>
        <List>
           {data.map(gener => <ListItem key = {gener.id} paddingY='5px'>
               <HStack>
                <Image objectFit = 'cover' boxSize = '32px' borderRadius={8} src = {getCroppedImageUrl(gener.image_background)} />
                <Button whiteSpace = {'normal'} textAlign = 'left' fontWeight = {gener.id === selectedGenre?.id ? 'bold': 'normal'} onClick = {() => onSelectedGenre(gener)} fontSize='lg' varient="link"> 
                {gener.name} </Button>
               </HStack>
               </ListItem>)} 
        </List>
        </>
    )
}

export default GenreList;
