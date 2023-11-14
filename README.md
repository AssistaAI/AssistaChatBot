<!-- markdownlint-disable MD030 -->

# Assista Embed

Javascript library to display Assista chatbot on your website

![Assista](https://github.com/AssistaAI/AssistaChatBot/blob/main/images/ChatEmbed.gif?raw=true)

Install:

```bash
yarn install
```

Dev:

```bash
yarn dev
```

Build:

```bash
yarn build
```

## Embed in your HTML

### PopUp

```html

<script type="module">
    import Chatbot from "https://cdn.jsdelivr.net/gh/AssistaAI/AssistaChatBot/dist/web.js";

    Chatbot.init({
        chatflowid: "<chatflowid>",
        apiHost: "https://assista.chat",
    });
</script>
```

### FullPage

```html

<script type="module">
    import Chatbot from "https://cdn.jsdelivr.net/gh/AssistaAI/AssistaChatBot/dist/web.js";

    Chatbot.initFull({
        chatflowid: "<chatflowid>",
        apiHost: "https://assista.chat",
    });
</script>
<flowise-fullchatbot></flowise-fullchatbot>
```

To enable full screen, add `margin: 0` to <code>body</code> style, and confirm you don't set height and width

```html

<body style="margin: 0">
<script type="module">
    import Chatbot from "https://cdn.jsdelivr.net/gh/AssistaAI/AssistaChatBot/dist/web.js";

    Chatbot.initFull({
        chatflowid: "<chatflowid>",
        apiHost: "https://assista.chat",
        theme: {
            chatWindow: {
                // height: 700, don't set height
                // width: 400, don't set width
            },
        },
    });
</script>
</body>
```

## Configuration

You can also customize chatbot with different configuration

```html

<script type="module">
    import Chatbot from "https://cdn.jsdelivr.net/gh/AssistaAI/AssistaChatBot/dist/web.js";

    Chatbot.init({
        chatflowid: "91e9c803-5169-4db9-8207-3c0915d71c5f",
        apiHost: "https://assista.chat",
        chatflowConfig: {
            // topK: 2
        },
        theme: {
            button: {
                backgroundColor: "#3B81F6",
                right: 20,
                bottom: 20,
                size: "medium",
                iconColor: "white",
                customIconSrc:
                        "https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg",
            },
            chatWindow: {
                title: "Assista Bot",
                titleAvatarSrc:
                        "https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg",
                welcomeMessage: "Hello! This is custom welcome message",
                backgroundColor: "#ffffff",
                height: 700,
                width: 400,
                fontSize: 16,
                poweredByTextColor: "#303235",
                botMessage: {
                    backgroundColor: "#f7f8ff",
                    textColor: "#303235",
                    showAvatar: true,
                    avatarSrc:
                            "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/parroticon.png",
                },
                userMessage: {
                    backgroundColor: "#3B81F6",
                    textColor: "#ffffff",
                    showAvatar: true,
                    avatarSrc:
                            "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png",
                },
                textInput: {
                    placeholder: "Type your question",
                    backgroundColor: "#ffffff",
                    textColor: "#303235",
                    sendButtonColor: "#3B81F6",
                },
            },
        },
    });
</script>
```

## License

Source code in this repository is made available under
the [MIT License](https://github.com/AssistaAI/AssistaChatBot/blob/master/LICENSE.md).
