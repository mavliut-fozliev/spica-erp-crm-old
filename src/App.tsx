import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import HomePage from "./pages/Home/Home";
import Theme from "./Theme";
import DetailPage from "./pages/DetailPage/DetailPage";
import ModulePage from "./pages/ModulePage/ModulePage";
import { usePageStore } from "./store/pageStore";
import LoginForm from "./pages/LoginForm/LoginForm";
import NotificationsPage from "./pages/NotificationsPage/NotificationsPage";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  const pageStore = usePageStore();

  const [isPageBuckets, setIsPageBuckets] = useState(false);

  useEffect(() => {
    if (Object.keys(pageStore.pageBuckets).length) {
      setIsPageBuckets(true);
    }
  }, [pageStore.pageBuckets]);

  /////////////////////////////this part resets view config in the localStorage////////////////////////////////////////
  useEffect(() => {
    localStorage.removeItem("localPages");
  }, []);
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <>
      <Theme>
        <Routes>
          <Route path="/" element={<HomePage />}>
            {isPageBuckets && (
              <>
                <Route path="/" element={<Dashboard />} />
                <Route path="/notifications" element={<NotificationsPage />} />
                {pageStore.config.Pages.map((page: any, index: number) => (
                  <Route key={index}>
                    <Route path={`/${page.title.toLowerCase()}`} element={<ModulePage currentPage={page} />} />
                    <Route path={`/${page.title.toLowerCase()}/:id`} element={<DetailPage currentPage={page} />} />
                  </Route>
                ))}
              </>
            )}
          </Route>

          <Route path="login" element={<LoginForm />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Theme>
    </>
  );
}

export default App;
