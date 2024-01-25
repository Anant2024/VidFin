// import React from 'react';
// import ReactDOM from 'react-dom/client';
// //import './index.css';
// import App from './App';
// //import './index.css'
// //import Layout from './Layout';
// //import Home from './components/Home/Home';
// //import About from './components/About/About';

// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   RouterProvider,Route,
// } from "react-router-dom";
// import VideoDetail from './components/VideoDetail';
// import ChannelDetail from './components/ChannelDetail';
// import SearchFeed from './components/SearchFeed';
// import Feed from './components/Feed';
// const router=createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<App/>}>
//       {/* <Route path='' element={<Home/>}/> */}
//       {/* <Route path='About' element={<About/>}/> */}
//       <Route path='/feed' element={<Feed/>}/>
//       <Route path='/video/:id' element={<VideoDetail/>}/>
//       <Route path='/channel/:id' element={<ChannelDetail/>}/>
//       <Route path='/search/:searchTerm' element={<SearchFeed/>}/>
      
//     </Route>
//   )
// )
// // const router = createBrowserRouter([
// //   {
// //     path: "/",
// //     element: <div>Hello world!</div>,
// //   },
// // ]);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);