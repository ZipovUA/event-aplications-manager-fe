import { useState } from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import QuestionsActionBar from './questionsActionBar';
import QuestionsList from './questionsList';
//import questionsDataObject from './questionsDataObject';
import QuestionsListService from './questionsListService';

export default function QuestionsListBar() {    
    const [selectedIndex, setSelectedIndex] = useState(1);
    const [showSetQuestionLabelComponent, setShowSetQuestionLabelComponent] = useState(false);
    const [currentOperation, setCurrentOperation] = useState('none');

    const handleListItemClick = (index) => {
        setSelectedIndex(index);
    }
    
    function hideLabelComponent() { console.log('hide'); setShowSetQuestionLabelComponent(false)};
    function showLabelComponent() { console.log('show'); setShowSetQuestionLabelComponent(true)};
    /*
    let questionsData = [
        {label: 'Question1', id: 1},
        {label: 'Question2', id: 2},
        {label: 'Question3', id: 3}
    ]
    */
    const [questionsData, setQuestionsData] = useState(QuestionsListService.getAllQuestions());
    return (
        <div style={{margin: "25px"}}>
            <h2>Questions list:</h2>
            <QuestionsList
                selectedItemIndex = {selectedIndex}
                questionsItemsInfo = {questionsData}
                handleListItemClick = {handleListItemClick}
                /> 
            
            <QuestionsActionBar 
                selectedItemIndex ={selectedIndex}
                questionsItemsInfo = {questionsData}
                setUpdatedQuestionsItemsInfo = {(updatedQuestionsInfo) => {setQuestionsData(updatedQuestionsInfo); console.log(`UpdatedQuestionsInfo`);console.table(updatedQuestionsInfo)}}
                showQuestionLabelComponent={showSetQuestionLabelComponent}
                showComponentEvent = {showLabelComponent}
                hideComponentEvent = {hideLabelComponent}
                //showLabelComponents
                />            
        </div>
    )
}