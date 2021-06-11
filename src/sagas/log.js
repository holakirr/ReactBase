/* eslint-disable */
import Api from '../api';
/* eslint-denable */

let messages = [];
let interval = null;

const intervalTimeout = 5000;

const realSend = () => {
  try {
    clearInterval(interval);

    const list = messages.map(x => x);

    if (list.length) {
      setTimeout(() => {
        Api.log.error({
          messages: list.map(x => ({
            date: x.date,
            message: x.message,
            stack: x.stack
          }))
        });

        interval = setInterval(realSend, intervalTimeout);
      }, 0);
    }

    messages = messages.filter(x => !list.find(w => w.id === x.id));
  } catch (e) {
    interval = setInterval(realSend, intervalTimeout);
  }
};

export const sendMessageToServer = ({ message, stack } = {}) => {
  messages.push({
    id: new Date().getTime(),
    date: new Date().toLocaleString(),
    message,
    stack
  });
};

export const runMessagesService = () => {
  interval = setInterval(realSend, intervalTimeout);

  window.onerror = (msg, url, lineNo, columnNo, error) => {
    sendMessageToServer({
      message: `${msg}
      ${url}
      ${lineNo}
      ${columnNo}`,
      stack: (error || {}).stack
    });
    return false;
  };
};
