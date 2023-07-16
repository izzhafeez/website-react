import { Route, Routes } from "react-router-dom";
import routesData from "routes/routes";
import './style.scss';
import Page from "./pages/Page";
import Landing from "./pages/Landing";

const Main = () => {
  return (
    <main className='pb-5 d-flex justify-content-center'>
      <div id='routes-container'>
        <Routes>
          {routesData.map(route => 
            <Route
              key={route.category}
              path={route.category}
              element={<Landing
                category={route.category}
                types={[]}
                constructor={route.constructor}
                data={route.data}
              />}
            />
          )}
          {routesData.map(route => [...route.types, 'all'].map(type =>
            <Route
              key={`/${type}`}
              path={`${route.category}/${type}`}
              element={<Landing
                category={route.category}
                types={route.types}
                constructor={route.constructor}
                data={route.data}
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