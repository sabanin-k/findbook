import { FC } from 'react'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { resetStartIndex, selectCategory, setCategory } from '../store/reducers/appReducer'
import { Select, MenuItem, InputLabel, FormControl } from '@mui/material';

export const SelectCategories: FC<Props> = ({ selectValues }) => {
    const dispatch = useAppDispatch()
    const category = useAppSelector(selectCategory)
    return (
        <FormControl sx={{ minWidth: 90 }} >
            <InputLabel id='menu-item'>категории</InputLabel>
            <Select
                labelId='menu-item'
                label='Выберите категорию'
                value={category}
                onChange={(e) => {
                    dispatch(setCategory(e.target.value))
                    dispatch(resetStartIndex())
                }}
            >
                {selectValues.map((selectValue, index) => {
                    return (
                        <MenuItem
                            key={index}
                            value={selectValue}
                        >
                            {selectValue}
                        </MenuItem>
                    )
                })}
            </Select>
        </FormControl>
    )
}


interface Props {
    selectValues: string[]
}