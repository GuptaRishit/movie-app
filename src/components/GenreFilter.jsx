function GenreFilter({genre,setGenre}){
    return(
        <select
        value={genre}
        onChange={(e)=>setGenre(e.target.value)}>
            <option value="">All</option>
            <option value="Action">Action</option>
            <option value="Comedy">Comedy</option>
            <option value="Drama">Drama</option>
        </select>
    );
}
export default GenreFilter;