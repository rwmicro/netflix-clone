import Header from "../../../components/main/Header";
import Link from "next/link";

export default function PageFilm() {
  return (
    <>
      <div className="min-h-screen w-full">
        <Header />
        <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center">
          The streaming of media without the permission of the owner is
          forbidden.
          <br /> If you need more information, please click{" "}
          <Link
            href={
              "https://en.wikipedia.org/wiki/Protecting_Lawful_Streaming_Act"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            here
          </Link>
          .
        </p>
      </div>
    </>
  );
}
