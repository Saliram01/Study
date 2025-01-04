import React from "react";
import TextsmsIcon from "@mui/icons-material/Textsms";
import CancelIcon from '@mui/icons-material/Cancel';
import { Box } from "@mui/material";

function ChatIcon({ setShowChatBot, showChatBot }) {
  return (
    <Box>
      {!showChatBot ? (
        <div>
          <TextsmsIcon
            onClick={() => setShowChatBot((prev) => !prev)}
            color="primary"
            sx={{
              fontSize: "50px",
              cursor: "pointer",
              position: "absolute",
              top: "90%",
              left: "95%",
            }}
          />
        </div>
      ) : (
        <div>
          <CancelIcon
            onClick={() => setShowChatBot((prev) => !prev)}
            color="primary"
            sx={{
              fontSize: "50px",
              cursor: "pointer",
              position: "absolute",
              top: "90%",
              left: "95%",
            }}
          />
        </div>
      )}
    </Box>
  );
}

export default ChatIcon;
