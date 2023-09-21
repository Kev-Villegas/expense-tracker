import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Tfoot,
  Td,
  Button,
  Center,
} from '@chakra-ui/react';

interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  expenses: Expense[];
  onDelete: (id: number) => void;
}

const ExpenseList = ({ expenses, onDelete }: Props) => {
  if (expenses.length === 0) return null;

  return (
    <>
      <Center mt='5' px='50' as='b' fontSize='xl' textAlign='center'>
        Expense Tracker
      </Center>
      <br />
      <br />
      <Table variant='simple'>
        <Thead>
          <Tr>
            <Th>Description</Th>
            <Th>Amount</Th>
            <Th>Category</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {expenses.map((expense) => (
            <Tr key={expense.id}>
              <Td>{expense.description}</Td>
              <Td>{expense.amount}</Td>
              <Td>{expense.category}</Td>
              <Td>
                <Button colorScheme='red' onClick={() => onDelete(expense.id)}>
                  Delete
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
        <Tfoot>
          <Tr>
            <Td>Total</Td>
            <Td>
              $
              {expenses
                .reduce((acc, expense) => expense.amount + acc, 0)
                .toFixed(2)}
            </Td>
            <Td></Td>
            <Td></Td>
          </Tr>
        </Tfoot>
      </Table>
    </>
  );
};

export default ExpenseList;
