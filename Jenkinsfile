pipeline {
    agent any

    stages {
        stage('Checkout SCM') {
            steps {
                checkout scm
            }
        }

        stage('Build Angular Project') {
            steps {
                nodejs(nodeJSInstallationName: 'NodeJS') {
                    sh 'npm install'
                    sh 'npm run build' // Replace with your build command
                }
            }
        }

        stage('Docker Build and Publish') {
            steps {
                // Build Docker image
                script {
                    def customImageName = "witoon-angular-app:${BUILD_NUMBER}"
                    def dockerImage = docker.build(customImageName, '.')
                }

                // Push Docker image to a Docker registry (optional)
                script {
                    def dockerRegistryURL = "witoonruamngoen/angular:${BUILD_NUMBER}"
                    docker.withRegistry(dockerRegistryURL, '') {
                        dockerImage.push()
                    }
                }
            }
        }
    }
}
