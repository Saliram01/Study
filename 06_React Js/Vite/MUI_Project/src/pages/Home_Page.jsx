import React from "react";
import { AppBar, Toolbar, Button, Typography, Box } from "@mui/material";
import ChatIcon from "../components/ChatIcon";
import ChatBot from "../components/ChatBot";

function Home_Page() {
  const [showChatBot, setShowChatBot] = React.useState(true);

  return (
    <>
      {/* Header */}
      <AppBar
        sx={{ background: "transparent", boxShadow: "0 0 5px #545454", height: "60px" }}
      >
        <Toolbar>
          {/* Logo */}
          <Typography variant="h5" color="#737373" sx={{ flexGrow: 1 }}>
            <strong>Solsphere</strong>
          </Typography>

          {/* Sign-in button */}
          <Button variant="outlined">Sign-in</Button>
        </Toolbar>
      </AppBar>

      {showChatBot ? <ChatBot setShowChatBot={setShowChatBot}/> : ""}
      <ChatIcon setShowChatBot={setShowChatBot} showChatBot={showChatBot} />
    </>
  );
}

export default Home_Page;
