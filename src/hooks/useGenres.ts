import genres from "../data/genres";

export interface Genre{
    id: number;
    name: string;
    image_background: string; 
}



//const useGenres = (selectedGenre: Genre | null) => ({data: genres, isLoading:false, error: null });
const useGenres = () => ({data: genres, isLoading:false, error: null });


export default useGenres;