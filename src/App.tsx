import { Box } from '@chakra-ui/react';
import ExpenseList from './components/ExpenseList';
import { useState } from 'react';
import ExpenseFilter from './components/ExpenseFilter';
import ExpenseForm from './components/ExpenseForm';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [expenses, setExpenses] = useState([
    { id: 1, description: 'Expense 1', amount: 10, category: 'Utilities' },
    { id: 2, description: 'Expense 2', amount: 10, category: 'Utilities' },
    { id: 3, description: 'Expense 3', amount: 10, category: 'Utilities' },
    { id: 4, description: 'Expense 4', amount: 10, category: 'Utilities' },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <Box p='2'>
      <Box marginBottom='5'>
        <ExpenseForm onSubmit={expense => setExpenses([...expenses, {...expense, id: expenses.length + 1}])} />
      </Box>
      <Box marginBottom='1.5'>
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </Box>

      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </Box>
  );
}

export default App;
