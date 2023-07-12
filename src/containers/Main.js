import { Route, Routes } from "react-router-dom";
import routesData from "routes/routes";
import './style.scss';

const Main = () => {
  return (
    <main className='pb-5 d-flex justify-content-center'>
      <div id='routes-container'>
        <Routes>
          {routesData.map(route => 
            <Route key={route.path} path={route.path} element={route.element()}/>
          )}
          {routesData.map(route => 
            <Route key={route.path+'-all'} path={route.path+'/all'} element={route.element('all')}/>
          )}
          {routesData.map(route => route.subroutes.map(subroute =>
            <Route key={subroute.path} path={route.path+subroute.path} element={route.element(subroute.type)}/>
          ))}
          {routesData.map(route => route.subroutes.map(subroute =>
            <Route key={subroute.path+'-page'} path={route.path+subroute.path+'/:page'} element={route.pageElement(subroute.type)}/>
          ))}
        </Routes>
        <br/><br/>
      </div>
    </main>
  );
};

export default Main;