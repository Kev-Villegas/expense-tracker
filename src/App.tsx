import { Box } from '@chakra-ui/react';
import ExpenseList from './components/ExpenseList';
import { useState } from 'react';

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: 'Expense 1', amount: 10, category: 'Utilities' },
    { id: 2, description: 'Expense 2', amount: 10, category: 'Utilities' },
    { id: 3, description: 'Expense 3', amount: 10, category: 'Utilities' },
    { id: 4, description: 'Expense 4', amount: 10, category: 'Utilities' },
  ]);

  return (
    <Box>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </Box>
  );
}

export default App;
