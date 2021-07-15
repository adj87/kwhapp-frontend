## Install

To test the app, please follow the next steps:

### Clone this repo

`git clone https://github.com/adj87/kwhapp-frontend.git`

### Run app (with docker)

Make sure you are in the root directory and then execute the following commands:

```sh
docker build -t app-front . 
```
when finished, execute:
```sh
docker run -d -p 3000:3000 --name app-front-container app-front
```

After a little, go to your browser and test the app : `http://localhost:3000`.

### Run app (regular way)

1. Install app dependencies:

    ```sh
    npm i
    ```

2. Run app:

    ```sh
    npm start
    ```

3. Test the app in your browser `http://localhost:3000`.

> Note 1: First, make sure the backend app is up.

> Note 2: You can import data from import-csv button or add manually one by one in the add button.

> Note 3: By default, the app is pointing to the backend on http://localhost:3001. If your backend is running on other port, change the frontend. That constant is defined in src/constants (const API_URL)

### Enjoy
