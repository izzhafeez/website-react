import { Route, Routes } from "react-router-dom";
import routesData from "routes/routes";
import './style.scss';

const Main = () => {
  return (
    <main>
      <Routes>
        {routesData.map(route => 
          <Route key={route.path} path={route.path} element={route.element()}/>
        )}
        {routesData.map(route => route.subroutes.map(subroute =>
          <Route key={subroute.path} path={route.path+subroute.path} element={route.element(subroute.type)}/>
        ))}
        {routesData.map(route => route.subroutes.map(subroute =>
          <Route key={subroute.path+'-page'} path={route.path+subroute.path+'/:page'} element={route.pageElement(subroute.type)}/>
        ))}
      </Routes>
    </main>
  );
};

export default Main;