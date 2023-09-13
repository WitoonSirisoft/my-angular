pipeline {
    agent any

    stages {
        
        // stage('Checkout SCM') {
        //     steps {
        //         checkout scm
                
        //     }
        // }
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
                    sh 'npm install -g @angular/cli'
                    sh 'npm install'
                    sh 'npm run build --prod'
                }
            }

        }

        stage('Log') {
            steps {
                sh 'pwd'
                sh 'ls'
                echo "${WORKSPACE}"
                dir("${WORKSPACE}@2") {
                    sh 'pwd'
                    sh 'ls'
                    echo "${WORKSPACE}"
                }
            }
        }

        stage('Docker Build and Publish') {
            steps {
                dir("${WORKSPACE}@2") {
                    script {
                        
                        // Build Docker image
                        def customImageName = "witoonruamngoen/angular:${BUILD_NUMBER}"
                        def dockerImage = docker.build(customImageName, "-f Dockerfile .")

                        // Push Docker image to a Docker registry (optional)
                        // def dockerRegistryURL = "https://hub.docker.com/r/witoonruamngoen/angular"
                        docker.withRegistry('', 'credentialsId') {
                            dockerImage.push()
                        }
                    }
                }
            }
        }

        stage('Cleanup') {
            steps {
                script {
                    sh "docker rmi witoonruamngoen/angular:${BUILD_NUMBER}" 
                }      
            }
        }

    }
}
