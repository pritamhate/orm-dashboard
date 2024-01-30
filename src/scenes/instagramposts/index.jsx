import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { instagramPostMockData } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";

const InstagramPosts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "row_id", headerName: "Row ID" },
    { field: "id", headerName: "ID" },
    { field: "inputUrl", headerName: "Input URL" },
    { field: "type", headerName: "Type" },
    { field: "shortCode", headerName: "Shorth Code" },
    { field: "caption", headerName: "Caption" },
    { field: "url", headerName: "URL" },
    { field: "commentsCount", headerName: "Comments Count", width: 100},
    { field: "firstComment", headerName: "First Comment" },
    { field: "dimensionsHeight", headerName: "Dimensions Height" },
    { field: "dimensionsWidth", headerName: "Dimensions Width" },
    { field: "displayUrl", headerName: "Display URL" },
    { field: "likesCount", headerName: "Likes Count" },
    { field: "timestamp", headerName: "Time Stamp" },
    { field: "ownerFullName", headerName: "Owner Full Name" },
    { field: "ownerUsername", headerName: "Owner Username" },
    { field: "ownerId", headerName: "Owner ID" },
    { field: "isSponsored", headerName: "Is Sponsored" },
    { field: "isPinned", headerName: "Is Pinned" },
    { field: "datetime", headerName: "Date Time" }
  ];

  return (
    <Box m="20px">
      <Header title="Instagram Posts" subtitle=" " />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={instagramPostMockData}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default InstagramPosts;
