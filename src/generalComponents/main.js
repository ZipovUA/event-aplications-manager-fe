import { Container, Grid, Paper, makeStyles } from '@material-ui/core';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';

import RecursiveTreeView from './questionsTreeView';
import QuestionsListBar from './questionsListBar/questionsListBar';


const useStyles = makeStyles({
    root: {
      height: 216,
      flexGrow: 1,
      maxWidth: 400,
    },
  });

function Main() {
    const classes = useStyles();
    return (
        <Container >
            <Grid container style={{height: "80%"}}>
                <Grid item xs={12}>
                    <h2>Questions components experiments:</h2>
                </Grid>
                
                <Grid item xs={4}>
                    <Paper>
                        <RecursiveTreeView /> 
                    </Paper>
                </Grid>
                <Grid item xs={8}>
                    <Paper>
                        <h2>Item content</h2>
                    </Paper>                    
                </Grid>
                <Grid item xs={4}>
                    <Paper>
                        <QuestionsListBar />                        
                    </Paper>
                </Grid>
                <Grid item xs={8}>
                    <Paper><h2>Question Content:</h2></Paper>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Main;