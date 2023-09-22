import {
  FormControl,
  FormLabel,
  Select,
  Box,
  Input,
  Button,
} from '@chakra-ui/react';
import { categories } from '../App';

const ExpenseForm = () => {
  return (
    <FormControl>
      <Box marginBottom='3'>
        <FormLabel htmlFor='description'>Description</FormLabel>
        <Input id='description' type='text'></Input>
      </Box>
      <Box marginBottom='3'>
        <FormLabel htmlFor='amount'>Amount</FormLabel>
        <Input id='amount' type='number'></Input>
      </Box>
      <Box marginBottom='3'>
        <FormLabel htmlFor='category'>Category</FormLabel>
        <Select id='category'>
          <option value=''></option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </Select>
      </Box>
      <Button colorScheme='teal' variant='solid'>Submit</Button>
    </FormControl>
  );
};

export default ExpenseForm;
