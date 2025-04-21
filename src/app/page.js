import Image from "next/image";
import styles from "./page.module.css";

export default async function Home() {
  const movies = await getMovies()
  return (
    <div className={styles.page}>
      <main className={styles.main}>
      <p>Movie name</p>
        <Image
          className={styles.logo}
          src="/cartoon.jpeg"
          alt="Next.js logo"
          width={180}
          height={180}
          priority
        />
          {
            movies.props.movies.map((movie, index) => 
            <div key={`${index}-${movie.Title}`}>
              {movie.Title}
              {
                movie.Poster &&  (
                  <Image
                    className={styles.logo}
                    src={movie.Poster}
                    alt="Next.js logo"
                    width={100}
                    height={100}
                    priority
                  />
                )
              }
            </div>
          )}
    </main>
    </div>
  );
}


export async function getMovies() {
  const res = await fetch(`https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies`)
  console.log(res);
  const movies = await res.json()
  return { props: { movies } }
}