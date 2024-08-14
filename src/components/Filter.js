import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { styled } from '@mui/material/styles';

const FilterButton = styled(Button)(({ theme, active }) => ({
    backgroundColor: active ? theme.palette.primary.main : theme.palette.grey[300],
    color: active ? theme.palette.primary.contrastText : theme.palette.text.primary,
    '&:hover': {
        backgroundColor: active ? theme.palette.primary.dark : theme.palette.grey[400],
    },
}));

const Filter = ({ setFilter, currentFilter }) => {
    return (
        <ButtonGroup
            variant="contained"
            aria-label="text button group"
            sx={{ marginTop: 2, width: '100%' }}
        >
            <FilterButton
                onClick={() => setFilter('all')}
                active={currentFilter === 'all'}
            >
                All
            </FilterButton>
            <FilterButton
                onClick={() => setFilter('completed')}
                active={currentFilter === 'completed'}
            >
                Completed
            </FilterButton>
            <FilterButton
                onClick={() => setFilter('pending')}
                active={currentFilter === 'pending'}
            >
                Pending
            </FilterButton>
        </ButtonGroup>
    );
};

export default Filter;
