// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <h1 className="text-3xl font-bold underline">
//     Hello world!
//   </h1>
//   );
// }

// export default App;
import React, { useState, useEffect } from "react";
import { Suspense } from "react";
import { ClimbingBoxLoader } from "react-spinners";
import Home from "./pages/Home";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Suspense
      fallback={
        <div className="h-screen w-full flex items-center justify-center">
          <ClimbingBoxLoader color="#f6c400" height={4} />
        </div>
        // <div></div>
      }
    >
      {loading ? (
        <div className="h-screen w-full flex items-center justify-center">
          <ClimbingBoxLoader color="#f6c400" height={4} />
        </div>
        // <div></div>
      ) : (
        <Home />
      )}
    </Suspense>
  );
};

export default App;
