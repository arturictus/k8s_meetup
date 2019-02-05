# Kubernetes meetup

## What's Kubernetes?

[kubernetes](https://kubernetes.io/)

### Terminology:

cluster: group of nodes
  |- node: computer or VM
    |- deployment
      |- pod

### Components:

- Deployment
- CronJobs
- Jobs
- Service
- Namespace

### Kubectl

```
kubectl [action] [component type] ([component name])

kubectl get pods
kubectl describe deployment hello-node
```
- get
- describe
- create -f
- replace -f
- delete -f

[cheatsheet](https://kubernetes.io/docs/reference/kubectl/cheatsheet/)

#### Deploy
```
kubectl set image deployment/hello-node app=arturictus/hello-node:0.2.0  
```

### Scale

```
kubectl scale --replicas=3 deployment/hello-node  
```

#### Context == Cluster
```
kubectl config current-context
kubectl config use-context minikube
```

### Tutorials

[codelabs](https://codelabs.developers.google.com/codelabs/cloud-hello-kubernetes/index.html)

### Tools

- [kubectx](https://github.com/ahmetb/kubectx)
