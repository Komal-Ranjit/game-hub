//import useData from "./useData";
import Platform from "../data/paltforms";


export interface Platform{
    id: number;
    name: string;
    slug: string; 
}
console.log("platform----------------",Platform)
const usePlatforms = () => ({ error: null , data: Platform});

//const usePlatforms = () => useData<Platform>('/platforms/lists/parents', {params: {  genres : null}} , null);


export default usePlatforms;