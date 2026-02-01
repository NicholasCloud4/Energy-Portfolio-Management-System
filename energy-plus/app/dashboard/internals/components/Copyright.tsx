import Link from "next/link";
import Typography from "@mui/material/Typography";

export default function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      align="center"
      {...props}
      sx={[
        {
          color: 'text.secondary',
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    >
        {'Copyright © '}
        energy plus 4910C
        &nbsp;
        {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}