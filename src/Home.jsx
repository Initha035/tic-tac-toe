import React from "react";
import fun from "./fun";
function Home() {
  const { board, handleclick, StateMsg, Reset } = fun();
  return (
    <>
      <div
        className="h-screen flex justify-between items-center bg-cover"
        style={{ backgroundImage: "url('/suzukaze-2.jpg" }}
      >
        <div className="ml-3 flex justify-between w-full px-20">
          <div className="w-2/3 p-5">
            <h1 className=" mt-4 flex justify-center text-5xl edu-tas-beginner-unique font-bold">
              Tic Tac Toe
            </h1>

            <p className="mt-7 flex justify-center text-3xl courgette-regular">
              {StateMsg()}
            </p>
            <div className="mt-20 flex justify-center">
              <div
                className="flr"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3,100px)",
                  gap: "2px",
                }}
              >
                {board.map((b, index) => {
                  return (
                    <button
                      className="text-white   bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-5xl px-5 py-2.5 text-center me-2 mb-2 font-bold"
                      style={{ width: "100px", height: "100px" }}
                      key={index}
                      onClick={() => handleclick(index)}
                      disabled={b !== null}
                    >
                      {b}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="mt-5 flex justify-center">
              <button
                onClick={Reset}
                className="mt-15 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
