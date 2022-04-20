# koa-hello-world

## Local setup
```shell
$ EXTERNAL_APP_PORT=3000 APP_PORT=3000 docker-compose up
```

```shell
$ curl localhost:3000 # Hello world
$ curl localhost:3000/health # {"status":"OK"}
```

## Kubernetes setup

Manifests located in `kubernetes-manifests` directory.
