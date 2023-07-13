import { Route, Routes } from "react-router-dom";
import routesData from "routes/routes";
import './style.scss';

const Main = () => {
  return (
    <main className='pb-5 d-flex justify-content-center'>
      <div id='routes-container'>
        <Routes>
          {routesData.map(route => 
            <Route
              key={route.category}
              path={route.category}
              element={route.element()}
            />
          )}
          {routesData.map(route => 
            <Route
              key={route.category+'-all'}
              path={route.category+'/all'}
              element={route.element('all')}
            />
          )}
          {routesData.map(route => route.subroutes.map(subroute =>
            <Route
              key={`/${subroute.type}`}
              path={`${route.category}/${subroute.type}`}
              element={route.element(subroute.type)}
            />
          ))}
          {routesData.map(route => route.subroutes.map(subroute =>
            <Route
              key={`/${subroute.type}-page`}
              path={`${route.category}/${subroute.type}`+'/:page'}
              element={route.pageElement(subroute.type)}
            />
          ))}
        </Routes>
        <br/><br/>
      </div>
    </main>
  );
};

export default Main;