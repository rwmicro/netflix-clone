'use client'
import mutedImage from "public/assets/img/tools/muted.png";
import unmuted from "public/assets/img/tools/unmuted.png";
import Image from "next/image";
import { useState } from "react";

export default function Mute() {
    const [mutedState, setMuted] = useState(false);

  return (
    <>
      <button
        className="h-fit w-fit border xl:border-2 rounded-full p-1.5 xl:p-3"
        onClick={() => (setMuted(!mutedState))}
      >
        {!mutedState && (
          <Image
            src={unmuted}
            alt="unmuted"
            width={40}
            height={40}
            className="rounded-full w-5 h-5 xl:h-6 xl:w-6"
          />
        )}
        {mutedState && (
          <Image
            src={mutedImage}
            alt="muted"
            width={40}
            height={40}
            className="rounded-full w-5 h-5 xl:h-6 xl:w-6"
          />
        )}
      </button>
    </>
  );
}
