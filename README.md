# Vatterott-Foundation readme

## Running this site

First, you need to install MongoDB

```sh
brew install mongodb
mkdir -p /data/db
sudo chown -R `id -un` /data/db
```

```sh
npm install
npm install -g nodemon gulp
```

Run the following commands in two separate windows

```sh
gulp serve
```

```sh
nodemon
```
