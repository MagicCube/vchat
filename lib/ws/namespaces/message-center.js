import io from "../io";
const messageCenter = io.of("/message-center");

messageCenter.on("connection", socket => {
    socket.emit("message", {
        head: { from: "root" },
        body: {
            content: "Say hello from server."
        }
    });
});

export default messageCenter;
