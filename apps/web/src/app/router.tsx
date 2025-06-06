import Layout from "@/layouts/layout";
import { useRoutes, BrowserRouter, Navigate } from "react-router";
import TrainingSessionEdit from "./training-session/edit";
import TrainingSessionView from "./training-session/view";
import TraineeViewMyself from "./trainee/view-myself";
import TraineeViewOther from "./trainee/view-other";
import ProtectedRoute from "@/components/protected-route";

export default function RootRouterOutlet() {
  const AppRoutes = () => {
    return useRoutes([
      {
        path: "/",
        element: (
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        ),
        children: [
          {
            index: true,
            element: <Navigate to="/trainee" replace />,
          },
          {
            path: "/training-session/:id",
            children: [
              {
                index: true,
                element: <TrainingSessionEdit />,
              },
              {
                path: "view",
                element: <TrainingSessionView />,
              },
            ],
          },
          {
            path: "/trainee",
            children: [
              {
                index: true,
                element: <TraineeViewMyself />,
              },
              {
                path: ":id",
                element: <TraineeViewOther />,
              },
            ],
          },
        ],
      },
    ]);
  };

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
