# Warframe bot

Foobar is a Google assistant chat-bot built using Dialogflow and Node.js.

## Details

Note: This is only the backend part of the application. As the frontend and model training is handled in the Dialogflow I'm including only the backend here.

There are two parts to this project:
 1. API server has all the required APIs defined.
 2. Webhook redirects traffic from Google Actions appropriately by making proper requests to the API server.

Both of them are in seperate folders named Node-Api and Webhook. 

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
