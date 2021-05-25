import React from "react";
import { Typography, Paper, Box } from "@material-ui/core";
import "./PreviewDoctors.css";

const PreviewDoctors = ({ data }) => {
  return (
    <Paper className="container__preview">
      {data.length > 0 ? (
        data.map((doctor) => {
          return (
            <Paper className="container__preview-doctor" key={doctor.id}>
              <Typography variant="body1">
                {doctor.first_name} {doctor.last_name}
              </Typography>
              <Typography variant="body1">
                {doctor.facility}, {doctor.city}
              </Typography>
              <Typography variant="body1">
                {doctor.area_of_expertise}
              </Typography>
              <Typography variant="body2">{doctor.email}</Typography>
            </Paper>
          );
        })
      ) : (
        <Box>
          There are no doctors with these specifications, please try again.
        </Box>
      )}
    </Paper>
  );
};

export default PreviewDoctors;
