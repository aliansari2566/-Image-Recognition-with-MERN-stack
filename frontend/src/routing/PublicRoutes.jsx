import Home from "pages/home";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";







// Lazy load the Login component


export const PublicRoutes = () => {
  return (

      <Router>
    
          <Routes>
           
            <Route
              path="/"
              element={
                
                  <Home />
               
              }
            />

          </Routes>
 
      </Router>

  );
};
