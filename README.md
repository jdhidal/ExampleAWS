# Proyect Web

This project is a static web application using HTML, CSS, JavaScript, images, and videos, designed to run inside a Docker container. Its main purpose is to demonstrate **Continuous Integration and Continuous Deployment (CI/CD)** practices on an AWS instance.

## Project Cloning

To get started, clone this repository to your local machine using the following command:

```bash
git clone https://github.com/jdhidal/ExampleAWS.git
```

## Run Locally with docker

The image for this project is also available on Docker Hub, allowing you to run it without needing to build it locally. You can get it by running:

```bash
docker pull jdhidalgo673/my-html-app:latest
```

```bash
docker run -d -p 8080:80 jdhidalgo673/my-html-app
```
This will make the application available at http://localhost:8080
