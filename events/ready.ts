import MessageLogger from "../utils/messages";

const once = true;
const name = "ready";

async function invoke() {
  MessageLogger.infoMessage(`Logged in as Crypto Inc`);
  MessageLogger.infoMessage(`Crypto Inc has started and is now awaiting commands.`);
}

export { once, name, invoke };
