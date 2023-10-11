import Image from "next/image";
import Link from "next/link";
import profilesJSON from '../../public/assets/json/profiles/profiles.json'

export default function Browse() {
  return (
    <>
      <div className="min-h-screen w-full">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <h1 className="text-3xl xl:text-6xl font-semibold text-white mb-5 xl:mb-10">
            Who are you ?
          </h1>
          <div className="flex gap-5">
            {profilesJSON.map((profile) => (
              <div className="flex flex-col items-center text-neutral-500 hover:text-white" key={profile.id}>
                <Link href="/">
                  <Image
                    alt={profile.name}
                    width={250}
                    height={250}
                    src={profile.imagePath}
                    className="rounded-md xl:w-44 w-24 border-2 border-transparent hover:border-white"
                  />
                </Link>
                <h1 className="mt-3 text-md xl:text-2xl font-normal">
                  {profile.name}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
