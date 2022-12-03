import { nanoid } from 'nanoid';
import { Box } from 'styles';
import { Label, Input } from './ContactForm.styled';

export const Filter = ({ value, onChange }) => {
  const filterInputId = nanoid();
  return (
    <Box as="form" onSubmit={e => e.preventDefault()}>
      <Label htmlFor={filterInputId}>Find contact by name:</Label>
      <Input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={value}
        onChange={onChange}
        id={filterInputId}
      />
    </Box>
  );
};
