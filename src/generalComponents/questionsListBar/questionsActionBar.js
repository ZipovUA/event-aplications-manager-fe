//import { Icon, Button, TextField } from '@material-ui/core'
import QuestionsListService from './questionsListService';

export default function QuestionsActionBar(props) {
    const showComponent = props.showQuestionLabelComponent === true ? {display: ''}: {display: 'none'};
    //const showComponent = props.showLabelComponent ? {display: ''}: {display: 'none'}
    return (
        <div style={{margin: "15px"}}>
            <div id="questionsListActionsButtons">
                <button
                    onClick={() => {
                        props.showComponentEvent()
                        const updatedData = QuestionsListService.addQuestion(`Question ${Date.now()}`);                    
                        props.setUpdatedQuestionsItemsInfo(updatedData);                        
                    }
                    }>Add</button>
                <button
                    onClick={() => props.showComponentEvent()}>Insert</button>
                <button
                    onClick={() => props.showComponentEvent()}>Edit</button>
                <button
                    onClick={() => {
                        const updatedData = QuestionsListService.removeQuestion(props.selectedItemIndex);                    
                        props.setUpdatedQuestionsItemsInfo(updatedData);            
                    }}>Remove</button>
                <button 
                    onClick={() => {                    
                        const updatedData = QuestionsListService.moveQuestionUp(props.selectedItemIndex);                    
                        props.setUpdatedQuestionsItemsInfo(updatedData);
                }}>Move Up</button>
                <button 
                    onClick={() => {
                        const updatedData = QuestionsListService.moveQuestionDown(props.selectedItemIndex);
                        props.setUpdatedQuestionsItemsInfo(updatedData);
                }}>Move Down</button>
            </div>
            
            <div style={showComponent} id="setLabelComponents">
                <input variant="outlined" type="text" />
                <button >OK</button>
                <button 
                    onClick = {() => props.hideComponentEvent()}
                >
                    Cancel
                </button>
            </div> 
        </div>
    )
}