import {  Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import {BsChevronDown} from 'react-icons/bs';
import { Platform } from "../hooks/useGames";
import usePlatforms from "../hooks/usePlatforms";

interface Props{
    onSelectedPlateform : (platform: Platform) => void;
    selectedPlatform : Platform | null;
}

const PlatformSelector = ({onSelectedPlateform, selectedPlatform}: Props) => {
    const {error, data} = usePlatforms();
    console.log("platform data--------------------",data);
    
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