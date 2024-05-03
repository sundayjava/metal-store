import { ChevronLeft } from "@mui/icons-material";
import { Box, Drawer, IconButton } from "@mui/material";

export default function AndroidSideBar(props: {
  isNonMobile: any;
  drawerWidth: any;
  isSidebarOpen: any;
  setIsSidebarOpen: any;
}) {
  const { drawerWidth, isNonMobile, isSidebarOpen, setIsSidebarOpen } = props;

  return (
    <Box component="nav">
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          elevation={20}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#232F3E",
              color: "white",
            },
          }}
        >
          <div className="w-full px-1">
            <div className="w-full">
              <div className="flex justify-between items-center border-b">
                <div className="flex items-center justify-between gap-5">
                  <button className="text-[14px] hover:text-accent">Open account</button>
                  <div className="w-[2px] h-5 bg-white"/>
                  <button className="text-[14px] hover:text-accent">Sign up</button>
                </div>
                <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                  <ChevronLeft sx={{ color: "white", fontSize:30 }} />
                </IconButton>
              </div>
            </div>
          </div>
        </Drawer>
      )}
    </Box>
  );
}
