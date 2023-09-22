import {
  FormControl,
  FormLabel,
  Select,
  Box,
  Input,
  Text,
  Button,
} from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import categories from '../categories';
import { z } from 'zod';

const schema = z.object({
  description: z
    .string()
    .min(3, { message: 'Description should be at least 3 characters!' })
    .max(40),
  amount: z.number({invalid_type_error: 'Amount is required!'}).min(0.01).max(100_000),
  category: z.enum(categories, {
    errorMap: () => ({message: 'Category is required!'})
  }),
});

type ExpenseFormData = z.infer<typeof schema>;

const ExpenseForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <FormControl>
        <Box mb='2'>
          <FormLabel htmlFor='description'>Description</FormLabel>
          <Input {...register('description')} id='description' type='text' />
          {errors.description && (
            <Text textColor='red.600'>{errors.description.message}</Text>
          )}
        </Box>
      </FormControl>
      <FormControl>
        <Box mb='2'>
          <FormLabel htmlFor='amount'>Amount</FormLabel>
          <Input
            {...register('amount', { valueAsNumber: true })}
            id='amount'
            type='number'
          />
          {errors.amount && (
            <Text textColor='red.600'>{errors.amount.message}</Text>
          )}
        </Box>
      </FormControl>
      <FormControl>
        <Box mb='4'>
          <FormLabel htmlFor='category'>Category</FormLabel>
          <Select {...register('category')} id='category'>
            <option value=''></option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </Select>
          {errors.category && (
            <Text textColor='red.600'>{errors.category.message}</Text>
          )}
        </Box>
      </FormControl>
      <Button colorScheme='teal' variant='solid' type='submit'>
        Submit
      </Button>
    </form>
  );
};

export default ExpenseForm;
