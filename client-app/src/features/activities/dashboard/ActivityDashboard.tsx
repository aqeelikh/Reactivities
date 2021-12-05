import React from 'react';
import { Grid, List } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';
import ActivityDetails from '../details/ActivitiyDetails';
import ActivityForm from '../form/ActivityForm';
import ActivityList from './ActivityList';

/*
Component Interface
*/
interface Props {
    activities: Activity[];
    selectedActivity: Activity | undefined;
    editMode: boolean;
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
    openForm: (id: string) => void;
    closeForm: () => void;
}

export default function ActivityDashboard({activities, selectedActivity, editMode, selectActivity, cancelSelectActivity, openForm, closeForm}: Props){
    return(
        <Grid>
            <Grid.Column width='10'>
                <ActivityList activities={activities} selectActivity={selectActivity} cancelSelectActivity={cancelSelectActivity}/>
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedActivity && !editMode &&
                <ActivityDetails 
                activity={selectedActivity} 
                cancelSelectActivity={cancelSelectActivity}
                openForm={openForm}
                />}
                {editMode &&
                <ActivityForm activity={selectedActivity} closeForm={closeForm} />}
            </Grid.Column>
        </Grid>
    )
}