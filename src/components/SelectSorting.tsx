import { FC } from 'react'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { resetStartIndex, selectOrder, setOrder } from '../store/reducers/app'
import { Select, MenuItem, InputLabel, FormControl } from '@mui/material';

export const SelectSorting: FC<Props> = ({ selectValues }) => {
    const dispatch = useAppDispatch()
    const sortingValue = useAppSelector(selectOrder)

    return (
        <FormControl sx={{ minWidth: 90 }} >
            <InputLabel id='menu-item'>сортировка</InputLabel>
            <Select
                labelId='menu-item'
                label='Сортировать по'
                value={sortingValue}
                onChange={(e) => {
                    dispatch(setOrder(e.target.value))
                    dispatch(resetStartIndex)
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