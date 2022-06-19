import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { client } from './client';
import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import drillQuery from './queries';
import { Home, Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from './pages';
import './App.css';

import { useStateContext } from './contexts/ContextProvider';

const App = () => {
  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings, isAuthorized } = useStateContext();
  const [drillData, setDrillData] = useState([]);

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');

    client.fetch(drillQuery).then((data) => {
      setDrillData(data);
    }); 

    console.log(drillData);

    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <TooltipComponent
              content="Settings"
              position="Top"
            >
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: '50%' }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>

            </TooltipComponent>
          </div>
          {isAuthorized && (activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          ))}
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >
            {isAuthorized && (
              <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
                <Navbar />
              </div>
            )}
            <div>
              {themeSettings && (<ThemeSettings />)}

              <Routes>
                {/* home  */}
                <Route path="/" element={(<Home />)} />

                {isAuthorized && (
                  <>
                    {/* dashboard  */}
                    <Route path="/account" element={(<Ecommerce />)} />
                    <Route path="/account/ecommerce" element={(<Ecommerce />)} />

                    {/* pages  */}
                    <Route path="/account/orders" element={<Orders />} />
                    <Route path="/account/employees" element={<Employees />} />
                    <Route path="/account/customers" element={<Customers />} />

                    {/* apps  */}
                    <Route path="/account/kanban" element={<Kanban />} />
                    <Route path="/account/editor" element={<Editor />} />
                    <Route path="/account/calendar" element={<Calendar />} />
                    <Route path="/account/color-picker" element={<ColorPicker />} />

                    {/* charts  */}
                    <Route path="/account/line" element={<Line />} />
                    <Route path="/account/area" element={<Area />} />
                    <Route path="/account/bar" element={<Bar />} />
                    <Route path="/account/pie" element={<Pie />} />
                    <Route path="/account/financial" element={<Financial />} />
                    <Route path="/account/color-mapping" element={<ColorMapping />} />
                    <Route path="/account/pyramid" element={<Pyramid />} />
                    <Route path="/account/stacked" element={<Stacked />} />
                  </>
                )}
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;