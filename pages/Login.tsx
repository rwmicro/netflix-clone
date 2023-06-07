import bg from "../public/assets/img/tools/login.jpg";

export default function Signup() {
  return (
    <>
      <div>
        <div
          className="relative filter brightness-60"
          style={{
            backgroundImage: `url(${bg.src})`,
            width: "100vw",
            height: "100vh",
          }}
        ></div>
        <img
          src="assets/img/tools/logo_netflix.png"
          className="w-1/4 absolute left-72 top-64"
        />
        <div className="block absolute left-2/4 ml-20 top-40 w-1/4 text-white bg-black bg-opacity-90 p-8 rounded-lg">
          <h1 className="text-4xl text-center mt-10">Sign In</h1>
          <h2 className="text-center text-xl mb-6">
            New here?{" "}
            <a className="text-redflix hover:underline" href="">
              Sign Up
            </a>
          </h2>
          <div className="">
            <input
              type="text"
              className="rounded-full p-2 text-white pl-5 bg-neutral-700 block w-full mb-5 focus:border-redflix"
              placeholder="Enter email address"
            />
            <input
              type="text"
              className="rounded-full p-2 text-white pl-5 bg-neutral-700 block w-full mb-2 focus:border-redflix"
              placeholder="Enter password"
            />
            <div className="mb-8 w-full">
              <div className="">
                <input
                  type="checkbox"
                  className="accent-redflix mr-3 "
                  checked
                />
                <label className="">Remember me</label>
                <a className="float-right">Forgot password</a>
              </div>
            </div>
            <a
              className="rounded-full p-2 text-white bg-redflix block w-full mb-2 text-center hover:bg-red-700"
              href=""
            >
              Sign In
            </a>
            <h1 className="text-2xl text-center mb-2">Or</h1>
            <button
              type="button"
              className="rounded-full p-2 text-white bg-black block w-full mb-2"
            >
              <svg
                className="h-6 ml-10 float-left"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="apple"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  fill="currentColor"
                  d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                ></path>
              </svg>
              <span className="-mt-30"> Continue with Apple</span>
            </button>
            <div className="mt-8 mb-10">
              <input type="checkbox" checked className="accent-redflix mr-3" />
              <label>I am agree wth the Terms & Conditions</label>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 w-full h-20 bg-black bg-opacity-80">
          <ul>
            <li className="inline-block mr-20 mt-7 ml-40">
              <a
                className="inline-block text-white font-semibold hover:border-b"
                href=""
              >
                Main
              </a>
            </li>
            <li className="inline-block mr-20 mt-7 ml-20">
              <a
                className="inline-block text-white font-semibold hover:border-b"
                href=""
              >
                Films
              </a>
            </li>
            <li className="inline-block mr-20 mt-7 ml-20">
              <a
                className="inline-block text-white font-semibold hover:border-b"
                href=""
              >
                Series
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
