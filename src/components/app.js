import React from "react";
import { useRoutes } from 'hookrouter';

import NavigationContainer from "./navigation/navigation-container";
import routes from "./navigation/routes";

export default function App() {
  const routeResult = useRoutes(routes);

    return (
      <div className='app'>
        <NavigationContainer />
        {routeResult}
      </div>
    );
}
