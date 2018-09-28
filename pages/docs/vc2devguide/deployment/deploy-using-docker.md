---
date: '2018-08-30'
title: 'Deploy using Docker'
layout: docs
---
## Summary

Use this guide to <a class="crosslink" href="https://virtocommerce.com/ecommerce-hosting" target="_blank">deploy</a> and configure Virto Commerce using Docker.


### Prerequisites
[Install Docker for Windows](https://docs.docker.com/docker-for-windows/install/)

[Install Docker Compose](https://docs.docker.com/compose/install/)

## Overview:

There are two types of docker images that are generated. One from the dev branch and one from the master branch. By default we will be setting up environment using latest master based images.

## Setup

Download [docker-compose.yml](https://github.com/VirtoCommerce/vc-docker/blob/master/windows/aspnetcore/docker-compose.yml) and save it to any folder on your computer. Then open command line and navigate to the folder you saved docker-compose.yml to and run the following command:

```
$ docker-compose up -d
```

This will download all dependencies and start 3 instances (storefront, admin and sql express).

**Note:** make sure to run "docker-compose pull" to get the latest version of the docker images from the registry if you already ran docker before.

Once images are started, open the administration site using the following URL and complete installation by following simple wizards:

[Backend Administration Console](http://localhost:8090).

After backend is completed, you can open storefront using the following URL: [Storefront](http://localhost:8080).

Note: you can change mapped addresses inside docker-compose.yml.

### Troubleshooting Docker Instances

To see running instances run `docker ps` 

To connect to specific instance run `docker exec -it vcdocker_vc-platform-web_1 cmd`