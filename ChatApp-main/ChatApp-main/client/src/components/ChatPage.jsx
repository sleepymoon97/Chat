import { ChatState } from "../Context/ChatProvider";
import { Box } from "@chakra-ui/layout";
import SideDrawer from "./miscellaneous/sideDrawer";
import Chatbox from "../components/ChatBox";
import MyChats from "../components/MyChats";
import { useState } from "react";

const ChatPage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
    const { user } = ChatState();

  return (
    <div style={{ width: "100%" }}>
        {user && <SideDrawer />}
        <Box display="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && 
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        }
      </Box>
        </div>
  )
};

export default ChatPage