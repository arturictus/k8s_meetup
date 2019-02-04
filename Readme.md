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

[cheatsheet](https://kubernetes.io/docs/reference/kubectl/cheatsheet/)

#### Context == Cluster
```
kubectl config current-context
kubectl config use-context minikube
```

### Tutorials

[codelabs](https://codelabs.developers.google.com/codelabs/cloud-hello-kubernetes/index.html)

### Tools

- kubens
