import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker, DatePickerFieldProps } from '@mui/x-date-pickers/DatePicker';
import CalendarTodayRoundedIcon from '@mui/icons-material/CalendarTodayRounded';
import {
  useParsedFormat,
  usePickerContext,
  useSplitFieldProps,
} from '@mui/x-date-pickers';
import {useForkRef} from "@mui/material";
import Button from "@mui/material/Button";

interface ButtonFieldProps extends DatePickerFieldProps {}

function ButtonField(props: ButtonFieldProps) {
  const { forwardedProps } = useSplitFieldProps(props, 'date');
  const pickerContext = usePickerContext();
  const handleRef = useForkRef(pickerContext.triggerRef, pickerContext.rootRef);
  const parsedFormat = useParsedFormat();
  const valueStr =
      pickerContext.value == null
          ? parsedFormat
          : pickerContext.value.format(pickerContext.fieldFormat);

  const { inputRef: _unusedInputRef, slotProps, ...rest } = forwardedProps as any;

  return (
      <Button
          {...rest}
          variant="outlined"
          ref={handleRef}
          size="small"
          startIcon={<CalendarTodayRoundedIcon fontSize="small" />}
          sx={{ minWidth: 'fit-content' }}
          onClick={() => pickerContext.setOpen((prev) => !prev)}
      >
        {pickerContext.label ?? valueStr}
      </Button>
  );
}




export default function CustomDatePicker() {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs('2023-04-17'));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        value={value}
        label={value == null ? null : value.format('MMM DD, YYYY')}
        onChange={(newValue) => setValue(newValue)}
        slots={{ field: ButtonField }}
        slotProps={{
          nextIconButton: { size: 'small' },
          previousIconButton: { size: 'small' },
        }}
        views={['day', 'month', 'year']}
      />
    </LocalizationProvider>
  );
}
