import Head from "next/head";
import Header from "../components/Header.jsx";
import Slider from "../components/Slider.jsx";
import Brand from "../components/Brand.jsx";
import MoviesCollection from "../components/MoviesCollection.jsx";
import ShowsCollection from "../components/ShowsCollection.jsx";

export default function Home({
  popularMovies,
  popularShows,
  topRatedMovies,
  topRatedShows,
}) {
  return (
    <div className="">
      <Head>
        <title>Disney+</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="relative min-h-screen after:bg-home after:bg-center after:bg-cover after:bg-no-repeat after:bg-fixed after:absolute after:inset-0 after:z-[-1]">
        <Slider results={popularMovies} />
        <Brand />
        <MoviesCollection results={popularMovies} title="Popular Movies" />
        <ShowsCollection results={popularShows} title="Popular Tv Shows" />
        <MoviesCollection results={topRatedMovies} title="Top Rated Movies" />
        <ShowsCollection results={topRatedShows} title="Top Rated Shows" />
      </main>
    </div>
  );
}

const tmdbUrl = "https://api.themoviedb.org/3";
export async function getServerSideProps() {
  const [
    popularMoviesRes,
    popularShowsRes,
    topRatedMoviesRes,
    topRatedShowsRes,
  ] = await Promise.all([
    fetch(
      `${tmdbUrl}/movie/popular?api_key=${process.env.MOVIE_API_KEY}&language=en-US@page=1`
    ),
    fetch(
      `${tmdbUrl}/tv/popular?api_key=${process.env.MOVIE_API_KEY}&language=en-US@page=1`
    ),
    fetch(
      `${tmdbUrl}/movie/top_rated?api_key=${process.env.MOVIE_API_KEY}&language=en-US@page=1`
    ),
    fetch(
      `${tmdbUrl}/tv/top_rated?api_key=${process.env.MOVIE_API_KEY}&language=en-US@page=1`
    ),
  ]);

  const [popularMovies, popularShows, topRatedMovies, topRatedShows] =
    await Promise.all([
      popularMoviesRes.json(),
      popularShowsRes.json(),
      topRatedMoviesRes.json(),
      topRatedShowsRes.json(),
    ]);

  return {
    props: {
      popularMovies: popularMovies.results,
      popularShows: popularShows.results,
      topRatedMovies: topRatedMovies.results,
      topRatedShows: topRatedShows.results,
    },
  };
}
