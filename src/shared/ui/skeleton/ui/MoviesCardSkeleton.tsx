import { Box, Skeleton } from "@mui/material";
import React from "react";

const MoviesCardSkeleton = ({
  itemsPerPage = 5,
  height = 342,
  width = 275,
  marginTop = 30,
}) => {
  return (
    <Box
      mt={marginTop}
      mb={2}
      display={"flex"}
      flexDirection={"row"}
      alignItems={"center"}
      justifyContent={"center"}>
      {[...Array(itemsPerPage)].map((_, index) => (
        <React.Fragment key={index}>
          <Skeleton
            key={index}
            animation="wave"
            variant="rectangular"
            height={height}
            width={width}
          />
        </React.Fragment>
      ))}
    </Box>
  );
};

export default MoviesCardSkeleton;
