import QuestionsTree from './questionsTree';
import QuestionsActionBar from './questionsActionBar';

let data = {
    id: 'root',
    name: 'Parent',
    children: [
      {
        id: '1',
        name: 'Child - 1',
      },
      {
        id: '3',
        name: 'Child - 3',
        children: [
          {
            id: '4',
            name: 'Child - 4',
          },
        ],
      },
    ],
  };
export default function QuestionsTreeBar() {
    return (
        <div>
            <div>Questions:</div>
            <QuestionsTree data={data} />
            <QuestionsActionBar />
        </div>
    )
}