
import ExpenseItem from './components/ExpenseItem';

const App=()=> {
  const expenses=[
    {
      id:'el1',
      title:'Car Insuranse',
      date:new Date(2022,1,25),
      price:200,
    },
    {
      id:'el2',
      title:'Tayota',
      date:new Date(2022,1,23),
      price:400000,
    },
    {
      id:'el3',
      title:'Course',
      date:new Date(2021,3,15),
      price:180,
    },
    {
      id:'el4',
      title:'Utilities',
      date:new Date(2022,6,30),
      price:100,
    },
  ]
  return (
    <div>
    <ExpenseItem items={expenses[0]}/>
    <ExpenseItem items={expenses[1]}/>
    <ExpenseItem items={expenses[2]}/>
    <ExpenseItem items={expenses[3]}/>
    </div>
  );
}

export default App;
