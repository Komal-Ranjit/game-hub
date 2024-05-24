import { Platform } from '../hooks/useGames';
import {FaWindows, FaPlaystation, FaXbox,FaApple,FaLinux,FaAndroid} from 'react-icons/fa';
import {MdPhoneIphone} from 'react-icons/md';
import {SiNintendo} from 'react-icons/si';
import {BsGlobe} from 'react-icons/bs';
import { Icon, IconType, HStack } from '@chakra-ui/react';

interface Props{
    platforms: Platform[]
}

const PlatformIconList = ({platforms}: Props) => {
    const iconMap: {[ key:string ] : IconType} = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo:SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        ios: MdPhoneIphone,
        web: BsGlobe,
        andriod: FaAndroid
    }
    return (
        <HStack marginY={1}>
            {platforms.map((platform) => 
                  <Icon as={iconMap[platform.slug]} color='gray.500' key={platform.id} />  
            )}
            
        </HStack>
    )
}

export default PlatformIconList
