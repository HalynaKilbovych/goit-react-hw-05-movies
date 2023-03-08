import { useState } from 'react';
import { BsSearch} from 'react-icons/bs';
import PropTypes from 'prop-types';
import { Container, Form, Field, Label, Input, Button } from './Form.styled';


export const SearchForm = ({ onSubmit }) => {
    const [query, setQuery] = useState('')
  
    const handleChange = e => setQuery(e.target.value);

    const submitHandler = e => {
      e.preventDefault();
      onSubmit(query);
      resetForm();
    };
  
    const resetForm = () => setQuery('');


    return (
            <Container>
            <Form onSubmit={submitHandler}>
                <Field>
                <Input
                    type="text"
                    name="query"
                    value={query}
                    autoComplete="off"
                    placeholder=" "
                    onChange={handleChange}
                />
                <Label>Search movies</Label>
                </Field>
                <Button type="submit">
                <BsSearch size={24} />
                </Button>
            </Form>
            </Container>
    );
    };


SearchForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  }; 

