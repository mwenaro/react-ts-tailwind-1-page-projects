import { Outlet, Route, Routes } from "react-router-dom";
import { PageWrapper } from "../components/modules";
import { Calc, Home, PageNotFound } from "../pages";


export default function routeConfig() {
  return (
    <Routes>
        <Route
          element={
            <PageWrapper>
              <Outlet />
            </PageWrapper>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/cal" element={<Calc />} />
          <Route path = "*" element={<PageNotFound />} />
        </Route>
      </Routes>
  )
}
