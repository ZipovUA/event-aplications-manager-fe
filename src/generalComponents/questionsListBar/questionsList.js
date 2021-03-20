import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';

export default function QuestionsList(props) {
    let [questionsItems, setQuestionsItems] = React.useState(props.questionsItemsInfo);
    if (props.questionsItemsInfo !== questionsItems) setQuestionsItems(props.questionsItemsInfo);
    //let questionsItems = props.questionsItemsInfo ? props.questionsItemsInfo : [{label: 'Question1', id: 1}]
    console.table(questionsItems);
    let questionsItemsElements = questionsItems.map((questionInfo) => {
        return (
            <div key={questionInfo.id}>
                <ListItem
                 button
                 selected={props.selectedItemIndex === questionInfo.id}
                 onClick={(event) => props.handleListItemClick(questionInfo.id)}
                 >
                    <ListItemText>{questionInfo.label}</ListItemText>
                </ListItem>
            </div>
        )
    })

    return (
        <List aria-label="questionsList">
            {questionsItemsElements}
        </List>
    )
}