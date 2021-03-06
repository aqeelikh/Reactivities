import React from 'react';
import { Button, Item, Label, Segment } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';

/*
Component Interface
we use () => so the the function selectActivity donet execute when the page is loaded
*/
interface Props {
    activities: Activity[];
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
    closeForm: () => void;
    deleteActiviy: (id: string) => void;
}

export default function ActivityList({activities, selectActivity, closeForm, deleteActiviy}: Props){
    return(
        <Segment>
            <Item.Group divided>
                {activities.map((activity) =>
                <Item key={activity.id}>
                    <Item.Content>
                        <Item.Header as='a'>{activity.title}</Item.Header>
                        <Item.Meta>{activity.date}</Item.Meta>
                        <Item.Description>
                            <div>{activity.desorption}</div>
                            <div>{activity.city}, {activity.venue}</div>
                        </Item.Description>
                        <Item.Extra>
                            <Button onClick={() => {
                                selectActivity(activity.id)
                                closeForm()
                            }} floated='right' content='View' color='blue'/>
                            <Button onClick={() => deleteActiviy(activity.id)} floated='right' content='Delete' color='red'/>
                            <Label basic content={activity.category}/>
                        </Item.Extra>
                    </Item.Content>
                </Item>
                )}
            </Item.Group>
        </Segment>
    )
}