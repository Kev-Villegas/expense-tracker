import { Select } from '@chakra-ui/react';
import { categories } from '../App';

interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <Select onChange={(e) => onSelectCategory(e.target.value)}>
      <option value=''>All Categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </Select>
  );
};

export default ExpenseFilter;
