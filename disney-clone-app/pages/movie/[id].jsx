function Movie() {
  return <div></div>;
}

export default Movie;

export async function getServerSideProps(context) {
  console.log("context", context);
  const { id } = context.query;
  const url = "https://api.themoviedb.org/3/movie/";

  const req = await fetch(
    `${url}${id}?api_key=${process.env.MOVIE_API_KEY}&language=en-US`
  );
}
