# koa-hello-world

## Local setup
```shell
$ EXTERNAL_APP_PORT=8000 APP_PORT=3000 docker-compose up
```

```shell
$ curl localhost:8000 # { "data": "hello world" }
$ curl localhost:8000/health # {"status":"OK"}
```

## Kubernetes setup

Manifests located in `kubernetes-manifests` directory, so:

```shell
$ cd kubernetes-manifests
$ kubectl apply -f .
```

```shell
$ curl arch.homework # {"data":"hello world"}
$ curl arch.homework/health # {"status":"OK"}
$ curl arch.homework/otusapp/nikita # {"data":"hello world"}
$ curl arch.homework/otusapp/nikita/abc # {"data":"hello world"}
```
