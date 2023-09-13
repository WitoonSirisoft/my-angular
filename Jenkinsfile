pipeline {
    agent any

    stages {
        
        stage('Checkout SCM') {
            steps {
                checkout scm
                
            }
        }
        // stage('Clear dir') {
        //     steps {
        //         deleteDir()
        //     }
        // }


        stage('Build Angular Project') {
            agent {
                 docker {
                        image "node"
                        args '-u root'
                }
            }
            
            steps {
                script {
                    def customDistPath = "${WORKSPACE}"
                    sh 'npm install -g @angular/cli'
                    sh 'npm install'
                    sh 'npm run build --prod'
                    sh "cp -r dist ${customDistPath}"
                }
            }

        }

        stage('Log') {
            steps {
                sh 'pwd'
                sh 'ls'
            }
        }

        stage('Docker Build and Publish') {
            steps {
                // Build Docker image
                script {
                    def customImageName = "witoon-angular-app:${BUILD_NUMBER}"
                    def dockerImage = docker.build(customImageName, "-f Dockerfile .")
                }

                // script {
                //     docker.withRegistry("https://" + "${env.registry_proxy}", "${env.nexus_credential}") {
                //         a = docker.build("${env.registryForDeploy}" + "/" + "${env.imageName}" + ":"+"${version_tag}", "-f Dockerfile .")
                //     }
                //     docker.withRegistry("https://" + "${env.registryForDeploy}", "${env.nexus_credential}") {
                //         a.push()
                //     }
                // }

                // Push Docker image to a Docker registry (optional)
                script {
                    def dockerRegistryURL = "https://registry.hub.docker.com"
                    docker.withRegistry(dockerRegistryURL, '') {
                        dockerImage.push()
                    }
                }
            }
        }
    }
}
