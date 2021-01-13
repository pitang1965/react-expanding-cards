import './App.css';

import ExpandingCards from './components/ExpandingCards';

const cardsData = [
  {
    title: '春',
    description: '春をながめる余裕もなく',
    url:
      'https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80',
  },
  {
    title: '夏',
    description: '夏をのりきる力もなく',
    url:
      'https://images.unsplash.com/photo-1584077804610-45fa278123a4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80',
  },
  {
    title: '秋',
    description: '秋の枯葉に身をつつみ',
    url:
      'https://images.unsplash.com/photo-1593350127836-82a5e3a7bac3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    title: '冬',
    description: '冬に骨身をさらけだす',
    url:
      'https://images.unsplash.com/photo-1477601263568-180e2c6d046e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
  },
];
function App() {
  return <ExpandingCards cards={cardsData} />;
}

export default App;
