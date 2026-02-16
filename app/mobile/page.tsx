import Header from "../../components/main/Header";

export default function Mobile() {
  return (
    <>
      <div className="min-h-screen w-full sm:hidden">
        <Header />
        <p className="absolute left-1/2 top-1/2 text-center -translate-x-1/2 -translate-y-1/2 text-white">
          Please view this site on a computer
        </p>{" "}
      </div>
    </>
  );
}
