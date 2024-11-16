import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  useNavigate,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { LandingPage } from "./landingPagSections/LandingPage.jsx"; //ignore this error stupid ahh shit

import Signin from "./signinPage/signin.jsx";
import Generate from "./generateQuestion/Generate.jsx";
import Quiz from "./pages/quiz/Quiz.jsx";
import GeneratedPaper from "./generatedQuestionPaper/generatedPaper.jsx";
import Track from "./pages/track/Track.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/generate",
    element: <Generate />,
  },
  {
    path: "/quiz/:id", element: <Quiz />
  },
  {
    path: "/generatedpaper", element: <GeneratedPaper />
  },
  {
    path: "/track/:id", element: <Track />
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
