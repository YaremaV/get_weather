import { Route, BrowserRouter, Switch } from "react-router-dom";
import { lazy, Suspense } from "react";
import AppBar from "./component/AppBar/AppBar";
import Container from "./component/Container/Container";
import "./App.css";
import { ToastContainer } from "react-toastify";
import Loader from "react-loader-spinner";

const SearchCountry = lazy(() => import("./views/Home/Home"));
const Information = lazy(() => import("./views/Information/Information"));

export default function App() {
  return (
    <Container>
      <BrowserRouter>
        <AppBar />

        <Suspense
          fallback={
            <Loader
              type="ThreeDots"
              color="teal"
              height={300}
              width={300}
              timeout={3000}
            />
          }
        >
          <Switch>
            <Route path="/get_weather" exact>
              <SearchCountry />
            </Route>

            <Route path="/Information/:infoId">
              <Information />
            </Route>

            {/* <Route path="/Information/:infoId"></Route> */}
          </Switch>
        </Suspense>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </BrowserRouter>
    </Container>
  );
}
