import { Route, Routes } from "react-router-dom";
import routesData from "routes/routes";
import './style.scss';
import Page from "./pages/Page";
import Landing from "./pages/Landing";
import Home from "./pages/Home";

const Main = () => {
  return (
    <main className='pb-5 d-flex justify-content-center'>
      <div id='routes-container'>
        <Routes>
          <Route path='' element={<Home/>}/>
          {routesData.slice(1).map(route => 
            <Route
              key={route.category}
              path={route.category}
              element={<Landing
                route={route}
              />}
            />
          )}
          {routesData.map(route => [...route.types, 'all'].map(type =>
            <Route
              key={`/${type}`}
              path={`${route.category}/${type}`}
              element={<Landing
                route={route}
                type={type}
              />}
            />
          ))}
          {routesData.map(route => route.types.map(type =>
            <Route
              key={`/${type}-page`}
              path={`${route.category}/${type}/:page`}
              element={<Page
                category={route.category}
                type={type}
                data={route.data}
              />}
            />
          ))}
        </Routes>
        <br/><br/>
      </div>
    </main>
  );
};

export default Main;