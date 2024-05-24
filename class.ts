// import { HStack, Image } from '@chakra-ui/react'
// import logo from '../assets/react.svg';
// import ColorModeSwitch from './ColorModeSwitch';
// const NavBar = () => {
//   return (
//     <HStack justifyContent = "space-between" padding="10px">
//       <Image src={logo} boxSize='60px' />
//       <ColorModeSwitch />
//     </HStack>
//   )
// }
// export default NavBar;


// ****************************


// import axios from "axios";

// export default axios.create({
//     baseURL: 'https://api.rawg.io/api/',
//     params:{
//         key: '27bd533371394a26b273eb739940167c'
//     }
// });
// service (folder ke ander)


// **********************************

// import { Text } from '@chakra-ui/react';
// import useGames from '../hooks/useGames';
// parag mundra8:58 PM
// const GameGrid = () => {
   
// const {games, error} =   useGames();
 
// return (
//         <>
//         {error && <Text>{error}</Text>}
//         <ul>
//             {games.map(game => <li key={game.id}>{game.name}</li>)}
//         </ul>
//         </>
//     )
// }

// export default GameGrid
// components folder ke ander


// ******************************************


// import { useEffect, useState } from "react";
// import { CanceledError } from "../../node_modules/axios/index";
// import apiClient from '../services/api-client';

// interface Game{
//     id: number;
//     name: string;
// }
// interface FetchGamesResponse {
//     count: number;
//     results: Game[];
// }
// const useGames = () => {
//     const controller = new AbortController();

//     const [games, setGames ] =   useState<Game []>([]);
//     const [error,setError] = useState('');
// useEffect( ()=>{
//         apiClient.get<FetchGamesResponse>('/games',{signal: controller.signal})
//         .then(res => setGames(res.data.results))
//         .catch(err => {
//                if(err instanceof CanceledError) return; 
//                 setError(err.message)
//             });
//        // return () => controller.abort();
//     },[]);
//     return {games, error};
// }

// export default useGames;
// hooks folder ke ander


// *********************************************


// import {extendTheme, ThemeConfig } from '@chakra-ui/react';

// const config: ThemeConfig = {
//     initialColorMode: 'dark'
//   };

// const theme = extendTheme({ config })

// export default theme;
// parag mundra8:59 PM
// main.tsx file ke sath


// ****************************************



// import {  Grid, GridItem,Show } from "@chakra-ui/react";
// import GameGrid from "./components/GameGrid";
// import NavBar from "./components/NavBar";

// function App() {

//   return (
// <Grid templateAreas = {{
//         base: `"nav nav"`,
//         lg: `"nav nav" "aside main"`}}> 
//       <GridItem area = 'nav'><NavBar />
//       </GridItem>
//       <Show> 
//         <GridItem area = 'aside'>Aside</GridItem>
//       </Show>
//       <GridItem area = 'main'>
//         <GameGrid />
//       </GridItem>
//       </Grid>
//   )
// }

// export default App


// *************************************************



// import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react'

// const ColorModeSwitch = () => {
// const { colorMode, toggleColorMode } = useColorMode();
//     return (
//        <HStack>
//            <Switch isChecked = {colorMode === 'dark'} onChange={toggleColorMode} />
//             <Text>Dark Mode</Text>
//        </HStack>
//     )
// }

// export default ColorModeSwitch;
// component folder ke ander


// *************************************************

// =============================
// axios install kerna


// ***************************************************************************************************************
// *************************************************************************************************************
// parag mundra8:20 PM
// https://rawg.io/@parag23/apikey
// parag mundra8:57 PM
// import { HStack, Image } from '@chakra-ui/react'
// import logo from '../assets/react.svg';
// import ColorModeSwitch from './ColorModeSwitch';
// const NavBar = () => {
//   return (
//     <HStack justifyContent = "space-between" padding="10px">
//       <Image src={logo} boxSize='60px' />
//       <ColorModeSwitch />
//     </HStack>
//   )
// }
// export default NavBar;
// ===================
// import axios from "axios";

// export default axios.create({
//     baseURL: 'https://api.rawg.io/api/',
//     params:{
//         key: '27bd533371394a26b273eb739940167c'
//     }
// });
// service (folder ke ander)
// =====================
// import { Text } from '@chakra-ui/react';
// import useGames from '../hooks/useGames';
// parag mundra8:58 PM
// const GameGrid = () => {
   
// const {games, error} =   useGames();
 
// return (
//         <>
//         {error && <Text>{error}</Text>}
//         <ul>
//             {games.map(game => <li key={game.id}>{game.name}</li>)}
//         </ul>
//         </>
//     )
// }

// export default GameGrid
// components folder ke ander
// ========================
// import { useEffect, useState } from "react";
// import { CanceledError } from "../../node_modules/axios/index";
// import apiClient from '../services/api-client';

// interface Game{
//     id: number;
//     name: string;
// }
// interface FetchGamesResponse {
//     count: number;
//     results: Game[];
// }
// const useGames = () => {
//     const controller = new AbortController();

//     const [games, setGames ] =   useState<Game []>([]);
//     const [error,setError] = useState('');
// useEffect( ()=>{
//         apiClient.get<FetchGamesResponse>('/games',{signal: controller.signal})
//         .then(res => setGames(res.data.results))
//         .catch(err => {
//                if(err instanceof CanceledError) return; 
//                 setError(err.message)
//             });
//        // return () => controller.abort();
//     },[]);
//     return {games, error};
// }

// export default useGames;
// hooks folder ke ander
// =====================
// import {extendTheme, ThemeConfig } from '@chakra-ui/react';

// const config: ThemeConfig = {
//     initialColorMode: 'dark'
//   };

// const theme = extendTheme({ config })

// export default theme;
// parag mundra8:59 PM
// main.tsx file ke sath
// ========================
// import {  Grid, GridItem,Show } from "@chakra-ui/react";
// import GameGrid from "./components/GameGrid";
// import NavBar from "./components/NavBar";

// function App() {

//   return (
// <Grid templateAreas = {{
//         base: `"nav nav"`,
//         lg: `"nav nav" "aside main"`}}> 
//       <GridItem area = 'nav'><NavBar />
//       </GridItem>
//       <Show> 
//         <GridItem area = 'aside'>Aside</GridItem>
//       </Show>
//       <GridItem area = 'main'>
//         <GameGrid />
//       </GridItem>
//       </Grid>
//   )
// }

// export default App
// ===================
// import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react'

// const ColorModeSwitch = () => {
// const { colorMode, toggleColorMode } = useColorMode();
//     return (
//        <HStack>
//            <Switch isChecked = {colorMode === 'dark'} onChange={toggleColorMode} />
//             <Text>Dark Mode</Text>
//        </HStack>
//     )
// }

// export default ColorModeSwitch;
// component folder ke ander
// =============================
// axios install kerna
// evq-xfgr-xut


// *****************************************23-01-2024******************************************************


// parag mundra9:09 PM
// import { Badge, colorScheme } from '@chakra-ui/react';

// interface Props{
//     score: number;
// }

// const CriticScore = ({score}: Props) => {
//     let color = score >75 ? 'green' : score > 60 ? 'yellow' : '';

//     return (
//             <Badge colorScheme= {color} fontSize='14px' paddingX={2} borderRadius='5px'>
//                 {score}
//             </Badge>
//     )
// }

// interface Props{
//     score: number;
// }

// export default CriticScore
// components=============
// export interface Platform{
//     id: number;
//     name: string;
//     slug: string;
// }

// export interface Game{
//     id: number;
//     name: string;
//     background_image: string;
//     parent_platforms: {platform : Platform} [];
//     metacritic: number;
// }
// interface FetchGamesResponse {
//     count: number;
//     results: Game[];
// }

// useGames.ts ke ander ke changes =====================
// GameGrid.tsx
// import { Text } from '@chakra-ui/react';
// import useGames from '../hooks/useGames';
// import { SimpleGrid } from '@chakra-ui/react';
// import GameCard from './GameCard';

// const GameGrid = () => {
   
// const {games, error} =   useGames();
// parag mundra9:11 PM
// return (
//         <>
//         {error && <Text>{error}</Text>}
//         <SimpleGrid columns = {{sm:1, md:2,lg:3,xl:5}} spacing= {10}>
//             {games.map(game => 
//                 <GameCard key = {game.id} game ={game} />
//             )}
//         </SimpleGrid>
//         </>
//     )
// }

// export default GameGrid
// ========================
// PlatformIconList.tsx

// import { Platform } from '../hooks/useGames';
// import { Text } from '@chakra-ui/react';
// import {FaWindows, FaPlaystation, FaXbox,FaApple,FaLinux,FaAndroid} from 'react-icons/fa';
// import {MdPhoneIphone} from 'react-icons/md';
// import {SiNintendo} from 'react-icons/si';
// import {BsGlobe} from 'react-icons/bs';
// import { Icon, IconType, HStack } from '@chakra-ui/react';

// interface Props{
//     platforms: Platform[]
// }
// const PlatformIconList = ({platforms}: Props) => {
//     const iconMap: {[ key:string ] : IconType} = {
//         pc: FaWindows,
//         playstation: FaPlaystation,
//         xbox: FaXbox,
//         nintendo:SiNintendo,
//         mac: FaApple,
//         linux: FaLinux,
//         ios: MdPhoneIphone,
//         web: BsGlobe,
//         andriod: FaAndroid
//     }
// return (
//         <HStack marginY={1}>
//             {platforms.map((platform) => <Text>
//                   <Icon as={iconMap[platform.slug]} color='gray.500' />  

//             </Text>)}
            
//         </HStack>
//     )
// }

// export default PlatformIconList
// ===============================
// GanmeCard.tsx
// import { Game } from '../hooks/useGames';
// import { Card, Image, CardBody, Heading, HStack } from '@chakra-ui/react';
// import PlatformIconList from './PlatformIconList';
// import CriticScore from './CriticScore';
// interface Props{
//     game: Game
// }

// const GameCard = ({game} : Props) => {
//     return (
//        <Card borderRadius={10} overflow='hidden'>  
//         <Image src={game.background_image} />
//         <CardBody>
//            <Heading fontSize = '2xl'> {game.name} </Heading>
//            <HStack justifyContent='space-between'>
//            <PlatformIconList platforms = {game.parent_platforms.map(p => p.platform)}/>
//            <CriticScore score= {game.metacritic} />
//            </HStack>
//         </CardBody>
// parag mundra9:12 PM
// </Card> 
//     )
// }

// export default GameCard;
// ====================
// evq-xfgr-xut

********



********
//

parag mundra7:57 PM
https://api.rawg.io/api/platforms/{id}
parag mundra7:58 PM
import useData from "./useData";


export interface Platform{
    id: number;
    name: string;
    slug: string; 
}



const usePlatforms = () => useData<Platform>('/platforms/lists/parents');


export default usePlatforms;
======================
import {  Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import {BsChevronDown} from 'react-icons/bs';
import usePlatforms from "../hooks/usePlatforms";
const PlatformSelector = () => {
    const {data} = usePlatforms();
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                Actions
            </MenuButton>
            <MenuList>
                {data.map(platform =><MenuItem key={platform.id}>{platform.name}</MenuItem> )}
        </MenuList>
        </Menu>
    )
}

export default PlatformSelector;
==============================
<GridItem area = "nav"><NavBar />
      </GridItem>
      <Show> 
        <GridItem area = "aside" paddingX={5}>
          <GenreList selectedGenre={selectedGenre} onSelectedGenre={(genre) => setSelectedGenre(genre)} />
        </GridItem>
      </Show>
      <GridItem area = "main">
        <PlatformSelector />
        <GameGrid selectedGenre = {selectedGenre} />
      </GridItem>
      </Grid>
==========================
parag mundra7:59 PM
GenreList

interface Props{
    onSelectedGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}
<List>
           {data.map(gener => <ListItem key = {gener.id} paddingY='5px'>
               <HStack>
                <Image boxSize = '32px' borderRadius={8} src = {getCroppedImageUrl(gener.image_background)} />
                <Button fontWeight = {gener.id === selectedGenre?.id ? 'bold': 'normal'} onClick = {() => onSelectedGenre(gener)} fontSize='lg' varient="link"> 
                {gener.name} </Button>
               </HStack>
               </ListItem>)} 
        </List>
const PlatformSelector = () => {
    const {error, data} = usePlatforms();
    
    if(error) return null;

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                Actions
            </MenuButton>
            <MenuList>
                {data.map(platform =><MenuItem key={platform.id}>{platform.name}</MenuItem> )}
        </MenuList>
        </Menu>
    )
}
evq-xfgr-xut

*************************************************
parag mundra
8:18 PM
const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
 const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);
============
function App() {

 const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
 const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

  return (


    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr'
      }}
    >
<GridItem area = "nav"><NavBar />
      </GridItem>
      <Show> 
        <GridItem area = "aside" paddingX={5}>
          <GenreList selectedGenre={selectedGenre} onSelectedGenre={(genre) => setSelectedGenre(genre)} />
        </GridItem>
      </Show>
      <GridItem area = "main">
        <PlatformSelector selectedPlatform={selectedPlatform} onSelectedPlateform = {(platform) => setSelectedPlatform(platform)} />
        <GameGrid selectedPlatform={selectedPlatform} selectedGenre = {selectedGen
<GameGrid selectedPlatform={selectedPlatform} selectedGenre = {selectedGenre} />
      </GridItem>
      </Grid>
)
}

export default App
==============
interface Props{
    selectedGenre : Genre | null;
    selectedPlatform : Platform | null;
}

const GameGrid = ({selectedGenre, selectedPlatform}: Props) => {
   
const {data, error, isLoading} =   useGames(selectedGenre, selectedPlatform);
parag mundra
8:20 PM
return (
        <>
        {error && <Text>{error}</Text>}
        <SimpleGrid columns = {{sm:1, md:2,lg:3,xl:5}}
         padding= "10px"
         spacing= {3}>
            {isLoading && skeletons.map((skeleton) => (
            <GameCardContainer key = {skeleton}>
                <GameCardSkeleton  />
            </GameCardContainer>
             ))}
{data.map(game => (
                <GameCardContainer key = {game.id}>
                     <GameCard  game ={game} />
                </GameCardContainer>
            ))}
        </SimpleGrid>
        </>
    )
}

export default GameGrid
===============
const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null) => useData<Game>('/games', 
                {params: {genres : selectedGenre?.id, platform: selectedPlatform?.id}}, 
                [selectedGenre?.id, selectedPlatform?.id]
        );
================
interface Props{
    onSelectedPlateform : (platform: Platform) => void;
    selectedPlatform : Platform | null;
}
const PlatformSelector = ({onSelectedPlateform, selectedPlatform}: Props) => {
    const {error, data} = usePlatforms();
    
    if(error) return null;
return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                {selectedPlatform?.name || 'Plaform'}
            </MenuButton>
            <MenuList>
                {data.map(platform =><MenuItem onClick={()=> onSelectedPlateform(platform)} key={platform.id}>{platform.name}</MenuItem> )}
        </MenuList>
        </Menu>
    )
}

export default PlatformSelector;
===============


***************************************************************
parag mundra
7:55 PM
<HStack spacing={5} paddingLeft={2} marginBottom={5}>
        <PlatformSelector selectedPlatform={gameQuery.platform} onSelectedPlateform = {(platform) => setGameQuery({...gameQuery, platform})} />
        <SortSelector />
        </HStack>
app.tsx
import {  Grid, GridItem,Show, HStack } from "@chakra-ui/react";
==========
import {  Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import {BsChevronDown} from 'react-icons/bs';


const SortSelector = () => {
return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                Order by: Relevance
            </MenuButton>
            <MenuList>
                <MenuItem>Relevance</MenuItem>
                <MenuItem>Date Added</MenuItem>
                <MenuItem>Name</MenuItem>
                <MenuItem>Release Date</MenuItem>
                <MenuItem>Popularity</MenuItem>
                <MenuItem>Average rating</MenuItem>
            </MenuList>
        </Men
</Menu> 
    )
}

export default SortSelector
evq-xfgr-xut