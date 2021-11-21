# 🗺️ IP Tracker

![Captura de pantalla 2021-11-21 a las 18 55 36](https://user-images.githubusercontent.com/27022503/142773439-4629e1b4-4c8f-4338-bb25-30d11b1dd47c.png)

This is an IP tracker. After installing and running the project you must create a `.env` file in the root folder to add your tokens for [Mapbox](https://www.mapbox.com/) and [IP Geolocation API](https://geo.ipify.org/). If you going to fork this repo and work over it, **please use a .env.local file** to store these tokens. In this way, you will **not upload your tokens to GitHub** (you can use secrets or another way, but is the simplest one).

### Steps:
1. Go to [Mapbox](https://www.mapbox.com/) and create your account.
2. Get your Mapbox Token
3. Create your .env (or .env.local) file in root folder (same level where package.json file is)
4. Type inside this file:
```
VUE_APP_TOKEN="put-here-your-token"
```
5. Go to [IP Geolocation API](https://geo.ipify.org/) and create an account.
6. Go to Docs and select the `API Type 2: Country + City` tab. There you will find an URL, you must take this one.
7. Type inside your .env (or .env.local) file this URL like this: 
```
VUE_APP_GET_IP_URL="https://geo.ipify.org/api/v2/country,city?apiKey=yourApiKey="
```
8. Save this .env (or .en.local) file and restart the server.

This is enough to start to work, now you can search any IP Address ;)

Hope you like it!! 😃

## How was done?
Using Open Street Map and Leaflet. For the CSS I was investigating with Tailwind, it is nice! 

The coordinates from geo.ipify sometimes are not exactly in the correct place, but they are really approximated, so if you know an alternative please let me know in an Issue or something. Thank you a lot for this!!! 😸

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
