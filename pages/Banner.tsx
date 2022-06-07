import Image from "next/image";
import { useEffect, useState } from "react";
import { baseUrl } from "../constants/movie";
import { Movie } from "../typings";

interface Props {
  netflixOriginals: [Movie];
}

const Banner = ({ netflixOriginals }: Props) => {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, [netflixOriginals]);
  console.log(movie);
  return (
    <div className="absolute top-0 left-0 h-[95vh] w-screen">
      <Image
        priority
        className="-z-10"
        layout="fill"
        src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
        objectFit="cover"
      />
      <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
        {movie?.overview}
      </p>
      <h1>Hello</h1>
    </div>
  );
};

export default Banner;
