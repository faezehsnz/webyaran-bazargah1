import React, { useEffect } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Avatar,
  Grid,
  Paper,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const messages = [
  { id: 1, text: "Hi there!", sender: "bot" },
  { id: 2, text: "Hello!", sender: "user" },
  { id: 3, text: "How can I assist you today?", sender: "bot" },
];

const ChatUI = ({ data }) => {
  const [input, setInput] = React.useState("");
  const [tickets, setTickets] = React.useState("");
  const [body, setBody] = React.useState(null);
  const local = JSON.parse(localStorage.getItem("key"));
  const getInfo = async (e) => {
    var bodyFormData = new FormData();
    bodyFormData.append("ticketID", data.ID);
    try {
      const response = await fetch(
        "https://hagbaar.com/api/Tickets/getTicketComments",
        {
          mode: "cors",
          method: "POST",
          body: bodyFormData,
        }
      );
      // window.open('/dashboard' , '_self')
      const data = await response.json();
      setTickets(data.ticketComments);
      console.log(data);
    } catch (e) {
      toast(e.detail);
      // setError(e.message);
    }
  };
  const postInfo = async (e) => {
    var bodyFormData = new FormData();
    bodyFormData.append("userID", local.userInfo.mobile);
    bodyFormData.append("ticketID", data.ID);
    bodyFormData.append("body", input);
    try {
      const response = await fetch(
        "https://hagbaar.com/api/Tickets/createTicketComments",
        {
          mode: "cors",
          method: "POST",
          body: bodyFormData,
        }
      );
      getInfo();
    } catch (e) {
      toast(e.detail);
      // setError(e.message);
    }
  };
  const handleSend = () => {
    if (input.trim() !== "") {
      postInfo();
      setInput("");
    }
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };
  useEffect(() => {
    getInfo();
  }, [2]);
  return (
    <Box
      sx={{
        height: "80vh",
        width: "90%",
        display: "flex",
        flexDirection: "column",
        bgcolor: "grey.200",
        mr: "60px",
      }}
    >
      <Box sx={{ flexGrow: 1, overflow: "auto", p: 2 }}>
        {tickets &&
          tickets.map((message) => (
            <Message key={message.ID} message={message} />
          ))}
      </Box>
      <Box sx={{ p: 2, backgroundColor: "background.default" }}>
        <Grid container spacing={2}>
          <Grid item xs={10}>
            <TextField
              size="small"
              fullWidth
              placeholder="لطفا پیام خود را بنویسید..."
              variant="outlined"
              value={input}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={2}>
            <Button
              fullWidth
              color="primary"
              variant="contained"
              endIcon={<SendIcon />}
              onClick={handleSend}
            >
              ارسال
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

const Message = ({ message }) => {
  const local = JSON.parse(localStorage.getItem("key"));
  const isBot = message.userIDCreator == local.userInfo.mobile;
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: isBot ? "flex-start" : "flex-end",
        mb: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: isBot ? "row" : "row-reverse",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ bgcolor: isBot ? "primary.main" : "secondary.main" }}>
          {/* {isBot ? "" : "U"} */}
        </Avatar>
        <Paper
          variant="outlined"
          sx={{
            p: 2,
            ml: isBot ? 1 : 0,
            mr: isBot ? 0 : 1,
            backgroundColor: isBot ? "primary.light" : "secondary.light",
            borderRadius: isBot ? "20px 20px 20px 5px" : "20px 20px 5px 20px",
          }}
        >
          <Typography variant="body1">{message.body}</Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default ChatUI;
