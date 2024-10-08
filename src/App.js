import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import './App.css';
import TenderManagement from './tcomponents/TenderManagement';
import CreateTender from './tcomponents/CreateTender';
import ClientManagement from './components/ClientManagement';
import Createclient from './components/Createclient';
import ClientDetails from './components/ClientDetails';
import TenderDetails from './tcomponents/TenderDetails';
import UploadedDocumets from './tcomponents/UploadeDocuments';




function App() {
  return (
    <>

      <Router>
        <Routes>
          <Route path='/' element={<TenderManagement />} />
          <Route path='/create-tender' element={<CreateTender />} />
          <Route path='/tender-details' element={<TenderDetails />} />
          <Route path='/uploaded-document' element={<UploadedDocumets />} />

          <Route path='/client' element={<ClientManagement />}></Route>
          <Route path='/new-client' element={<Createclient />}></Route>
          <Route path='/client-details' element={<ClientDetails />}></Route>




        </Routes>
      </Router>



    </>
  );
}

export default App;


