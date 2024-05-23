export default function LoadingPop() {
  return (
    <>
      <div className="h-screen w-full bg-black/30 fixed top-0 left-0"></div>
      <div
        className="fixed top-10 w-10/12 xl:w-2/4 left-1/2 animate-pulse -translate-x-1/2 flex flex-col rounded-md max-h-full z-[999]"
        style={{ backgroundColor: "#141414" }}
      >
        <div className="h-1/3 bg-neutral-800 "></div>
        <div className="h-2/3 bg-neutral-700"></div>
      </div>
    </>
  );
}
