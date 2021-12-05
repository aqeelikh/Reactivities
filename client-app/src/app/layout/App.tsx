import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Container, List } from 'semantic-ui-react';
import { Activity } from '../models/activity';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';

function App() {

  const [activities,setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState< Activity | undefined >(undefined);
  const [editMode, setEditMode] = useState(false)

  useEffect(() => {
    axios.get<Activity[]>('http://localhost:5000/api/activities').then(response => {
      setActivities(response.data);
    })
  },[])

  function handleSelectActivity(id: string) {
    // Find the id of the selected activity and return true after that we assign it to id 
    setSelectedActivity(activities.find(x => x.id === id));
  }

  function handleCancelledSelectActivity() {
    setSelectedActivity(undefined);
  }

  function handleFormOpen(id?: string){
    id ? handleSelectActivity(id) : handleCancelledSelectActivity();
    setEditMode(true);
  }
  
  function handleFormClose(){
    setEditMode(false);
  }
  
  return (
    <>
      <NavBar openForm={handleFormOpen}/>
      <Container style={{marginTop: '7em'}}>
        <ActivityDashboard
          activities={activities}
          selectedActivity={selectedActivity}
          editMode={editMode}
          selectActivity={handleSelectActivity}
          cancelSelectActivity={handleCancelledSelectActivity}
          openForm={handleFormOpen}
          closeForm={handleFormClose}
        />
      </Container>
    </>
  );
}

export default App;
