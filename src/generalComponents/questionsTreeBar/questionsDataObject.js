function findParent(dataObj, parentId) {
    
}

export default class QuestionsDataObject {
    static dataObject = {
        lastId: 0,
        nodes: {
            id: 'root',
            name: 'Questions:',
            children: []
        }
    };
    
    

    static addNode(parentId, newNodeName) {
        this.dataObject.lastId++;
        const newObj = {
            id: this.dataObject.lastId,
            name: newNodeName,
            children: []
        }
        return null//new node id
    }

    
    static removeNode(nodeId) {
        //
    }

    static renameNode(nodeId, newNodeName) {
        //
    }

    static moveNodeUp(parentId, nodeId){

    } 

    static moveNodeDown(parentId, nodeId) {

    }

    static duplicateNode(nodeId) {
        return null;//new node id
    }

}