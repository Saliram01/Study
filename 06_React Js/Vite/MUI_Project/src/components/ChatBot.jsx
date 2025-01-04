import { Box, Container, Typography } from "@mui/material";
import React from "react";
import SendIcon from '@mui/icons-material/Send';

function ChatBot() {
  const [messages, setMessages] = React.useState([]);

  const handleMessage = () => {
    console.log(messages)
  }

  return (
    <Container maxWidth="xs" sx={{
      position: 'absolute',
      top: '18%',
      left: '70%',
    }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          bgcolor: "background.paper",
          boxShadow: 3,
          borderRadius: 2,
          p: 1,
        }}
      >
        <Typography variant="h6" component="h6" gutterBottom>ChatBot</Typography>

        <Box
          sx={{
            width: "100%",
            height: "55vh",
            overflowY: "auto",
            bgcolor: "background.default",
            p: 2,
            borderRadius: 1,
            boxShadow: 1,
            mb: 2,
          }}
        >
          {/* Chat messages will go here */}
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                bgcolor: "primary.main",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                mr: 2,
              }}
            >
              P
            </Box>
            <Box sx={{ bgcolor: "background.paper", p: 1, borderRadius: 1, boxShadow: 1, }} >
              <Typography variant="body2">
                Hello! How can I help you today?
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 1,
              justifyContent: "flex-end",
            }}
          >
            <Box
              sx={{
                bgcolor: "background.paper",
                p: 1,
                borderRadius: 1,
                boxShadow: 1,
                mr: 2,
              }}
            >
              <Typography variant="body2">
                I need some information about your services.
              </Typography>
            </Box>

            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                bgcolor: "secondary.main",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
              }}
            >
              S
            </Box>
          </Box>
        </Box>

        {/* Chat input */}
        <Box sx={{ display: "flex", width: "100%", gap: '5px' }}>
          <input
            type="text"
            placeholder="Type a message..."
            value={messages}
            onChange={(e) => setMessages(prev => [...prev, e.target.value])}
            style={{
              flexGrow: 1,
              padding: "10px",
              borderRadius: '50px',
              border: "1px solid #ccc",
              outline: "none",
            }}
          />
          <button
            onClick={handleMessage}
            style={{
              padding: "10px 12px",
              borderRadius: "50%",
              border: "none",
              backgroundColor: "#1976d2",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            <SendIcon/>
          </button>
        </Box>
      </Box>
    </Container>
  );
}

export default ChatBot;
