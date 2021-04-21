const TelegramBot = require('node-telegram-bot-api');

const token = '';

const bot = new TelegramBot(token, {polling: true});

const keyboard = [
    [
        {
            text: '123',
            callback_data: '123'
        }
    ],
    [
        {
            text: '228',
            callback_data: '228'
        }
    ],
    [
        {
            text: 'url',
            url: 'https://github.com/Qurubo/SimpleJSTelegrambot'
        }
    ]
];

bot.on('message', (msg) => {
    const chatId = msg.chat.id;

    bot.sendMessage(chatId, 'Hello!', {
        reply_markup: {
            inline_keyboard: keyboard
        }
    });
});

bot.on('callback_query', (query) => {
    const chatId = query.message.chat.id;

    let text = '';
    console.log(query.data);

    if (query.data === '123') {
        text = '123';
    }

    if (query.data === '228') {
        text = '228';
    }

    if (text) {
        bot.sendMessage(chatId, text, {
            reply_markup: {
                inline_keyboard: keyboard
            }
        });
    } else {
        bot.sendMessage(chatId, 'Wrong button', {
            reply_markup: {
                inline_keyboard: keyboard
            }
        });
    }
});