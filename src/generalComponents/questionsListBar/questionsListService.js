let lastQuestionId = 3;
let questionsItems = [
    { 
        label: 'Question1', 
        id: 1,
        labelLocalization: {
            en: 'Age',
            uk: 'Вік',
            ru: 'Возраст'
        }
    },
    { 
        label: 'Question2', 
        id: 2,
        labelLocalization: {
            en: 'Name of animation / movie / game',
            uk: 'Назва анімаційного / фільмового / ігрового твору',
            ru: 'Название анимационного / фильмового / игрового произвидения'
        }
    },
    { 
        label: 'Question3',
         id: 3,
         labelLocalization: {
             en: 'Team (band) name',
             uk: 'Назва команди',
             ru: 'Название команды'
         }
    }
]
/*
function indexOf(id) {
    let index= -1;

    questionsItems.forEach((questionInfo, i) => {
        if (questionInfo.id === id) index = i;
    })

    return index;
}
*/
export default class QuestionsListService {
    static addQuestion(label) {
        lastQuestionId++;
        questionsItems.push({
            label: label,
            id: lastQuestionId
        });
        return questionsItems;
    }


    static insert(existingId, newQuestionLabel) {

    }

    static renameQuestion(id, newName) {
        questionsItems.forEach(item => {
            if (item.id === id) item.label = newName;
        })
        return questionsItems;
    }

    static removeQuestion(id) {
        let newArray = [];
        questionsItems.forEach(item => {
            if (item.id !== id) newArray.push(item);
        });

        questionsItems = newArray;
        return questionsItems;
    }

    static getAllQuestions() {
        return questionsItems;
    }

    static moveQuestionUp(id) {
        if (id!==questionsItems[0].id) {
            //find position of current item by id
            //exchange current item with previous item
            for(let i = 1; i < questionsItems.length; i++) {
                if (id === questionsItems[i].id) {
                    const buf = questionsItems[i-1];
                    questionsItems[i-1] = questionsItems[i];
                    questionsItems[i] = buf;
                    return questionsItems;
                }
            }
        }
        return questionsItems;
    }

    static moveQuestionDown(id) {
        if (id!==questionsItems[questionsItems.length - 1].id) {
            //find position of current item by id
            //exchange current item with next item
            for (let i = 0; i < questionsItems.length-1;i++) {
                if (id === questionsItems[i].id) {
                    const buf = questionsItems[i + 1];
                    questionsItems[i + 1] = questionsItems[i];
                    questionsItems[i] = buf;
                    return questionsItems;
                }
            }
        }
        return questionsItems;
    }
}