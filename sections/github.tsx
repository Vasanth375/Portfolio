import { useEffect } from "react";
// import { Repos } from "@/modules/github";
import Tooltip from "@mui/material/Tooltip";
// import Link from "next/link";
import AOS from "aos";
import { useTheme } from "next-themes";
import "aos/dist/aos.css";

import GitHubCalendar from "react-github-calendar";
// import Image from "next/image";

// interface Repo {
//   id: number;
//   name: string;
//   html_url: URL;
//   language: string;
// }

export default function GitHub() {
  // const [repolist, setRepoList] = useState<Repo[]>([]);

  const { theme } = useTheme();
  useEffect(() => {
    AOS.init({ duration: 900 });
  }, []);

  // useEffect(() => {
  //   async function contibutionFetch() {
  //     const res = await Repos();
  //     const repos = res.map(
  //       (repo: {
  //         html_url: URL;
  //         id: number;
  //         name: string;
  //         language: string;
  //       }) => ({
  //         id: repo.id,
  //         name: repo.name,
  //         html_url: repo.html_url,
  //         language: repo.language,
  //       })
  //     );
  //     setRepoList(repos);
  //   }

  //   contibutionFetch();
  // }, []);

  // const imagesforlan: Record<string, string> = {
  //   JavaScript: "/Javascript.png",
  //   CSS: "/css.png",
  //   HTML: "/html.png",
  //   TypeScript: "/ts.png",
  //   PHP: "/php.png",
  //   MDX: "/mdx.svg",
  // };

  return (
    <div
      id="github"
      className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-16 lg:pt-10 section"
    >
      <div
        data-aos="fade-down"
        className="flex items-center justify-between w-32 px-4 py-1 mb-16 border border-line rounded-3xl"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          role="img"
          className="inline-block w-6 h-6 text-end octicon octicon-mark-github"
          viewBox="0 0 16 16"
          fill="currentColor"
        >
          <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
        </svg>
        <div>GitHub</div>
      </div>
      <div className="flex flex-col max-w-5xl">
        <h1
          data-aos="fade-down"
          className="py-4 font-sans text-xl text-justify"
        >
          Through the pixels of my{" "}
          <span className="text-3xl font-medium text-transparent text-accent-color bg-gradient-to-r from-gradient-start via-gradient-min to-gradient-end bg-clip-text">
            GitHub contribution map
          </span>
          , I paint the story of my coding journey, embracing the beauty of open
          source and the power of collaborative creation.
        </h1>
        <div className="flex flex-col items-center w-full gap-4 pb-8 rounded justify-evenly">
          <div
            data-aos="fade-down"
            className="flex flex-col justify-center py-8 rounded "
          >
            <GitHubCalendar
              colorScheme={theme==="light"?"light":"dark"}
              renderBlock={(block, activity) => (
                <Tooltip
                  followCursor
                  title={`${activity.count} activities on ${activity.date}`}
                >
                  {block}
                </Tooltip>
              )}
              username="Vasanth375"
            />
          </div>
          {/* <div
            className="grid justify-center grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:mt-10"
          >
            <div className="flex items-center justify-center p-4">
              <h1 className="text-3xl font-bold">
                My <span className="text-transparent text-accent-color bg-gradient-to-r from-gradient-start via-gradient-min to-gradient-end bg-clip-text">Repositories</span>
              </h1>
            </div>
            {repolist.map((repos, i) => {
              return (
                <Link
                data-aos={`${i%2==0?"fade-right":"fade-left"}`}
                  key={i}
                  href={
                    repos.html_url &&
                    (repos.html_url !== null || repos.html_url !== undefined)
                      ? repos.html_url
                      : "#"
                  }
                  target="_blank"
                  className="flex justify-center p-2 transition duration-300 transform border cursor-pointer hover:scale-105 group border-line hover:border-accent-color rounded-xl"
                >
                  <div className="flex flex-col w-full">
                    <div className="flex justify-between p-4 text-justify">
                      <h3 className="font-sans text-sm font-medium">
                        {repos.name}
                      </h3>
                      <Image
                        src={`https://opengraph.githubassets.com/1/vasanth-selvaraj/${repos.name}`}
                        height={150}
                        width={150}
                        className="rounded"
                        alt="repo img"
                      />
                    </div>
                    <div className="flex items-center ">
                      <div className="flex gap-4 py-4 pl-4">
                        {repos.language !== null && (
                          <Image
                            src={imagesforlan[repos.language]}
                            alt="key"
                            height={25}
                            width={25}
                            className="flex items-center justify-center w-6 h-6 rounded mix-blend-lighten"
                          />
                        )}
                      </div>
                      <h3 className="pl-2 text-xs">
                        {repos.language !== null && repos.language}
                      </h3>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div> */}
        </div>
      </div>
    </div>
  );
}
