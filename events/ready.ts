import MessageLogger from "../utils/messages";

const once = true;
const name = "ready";

async function invoke() {
  MessageLogger.infoMessage(`Logged in as Crypto Inc`);
}

export { once, name, invoke };