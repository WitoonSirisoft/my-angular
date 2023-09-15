pipeline {
    agent any

    // environment {
    //     // CLOUDSDK_CORE_PROJECT='valid-unfolding-398711'
    //     // CLIENT_EMAIL='jenkins-gcloud@valid-unfolding-398711.iam.gserviceaccount.com'
    //     // GCLOUD_CREDS=credentials('gcloud-creds')
    //     // FIREBASE_CREDS=FileCredentials('witoonangular')
    // }

    stages {

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

        stage('Initialize firebase') {
            agent {
                 docker {
                        image "node"
                        args '-u root'
                }
            }
            
            steps {
                script {
                    sh 'npm install -g firebase-tools'
                    // sh 'firebase login:ci --interactive'
                    // sh 'firebase init hosting'
                    withCredentials([file(credentialsId: 'angularCreds', variable: 'FIREBASE_CREDS')]) {
                        sh 'gcloud auth login --cred-file=$FIREBASE_CREDS'
                        sh 'firebase deploy'
                    }
                    
                }
            }

        }

        stage('Auth and Deploy') {
            agent {
                 docker {
                        image "google/cloud-sdk:alpine"
                }
            }
            steps {
                script {
                    withCredentials([file(credentialsId: 'angularCreds', variable: 'FIREBASE_CREDS')]) {
                        sh 'gcloud auth login --cred-file=$FIREBASE_CREDS'
                        sh 'firebase deploy'
                    }
                }
            }
        }

        // stage('Log') {
        //     steps {
        //         sh 'pwd'
        //         sh 'ls'
        //         echo "${WORKSPACE}"
        //         dir("${WORKSPACE}@2") {
        //             sh 'pwd'
        //             sh 'ls'
        //             echo "${WORKSPACE}"
        //         }
        //     }
        // }

        // stage('Docker Build and Publish') {
        //     steps {
        //         dir("${WORKSPACE}@2") {
        //             script {
                        
        //                 // Build Docker image
        //                 def customImageName = "witoonruamngoen/angular:${BUILD_NUMBER}"
        //                 def dockerImage = docker.build(customImageName, "-f Dockerfile .")

        //                 // Push Docker image to a Docker registry (optional)
        //                 docker.withRegistry('', 'credentialsId') {
        //                     dockerImage.push()
        //                 }
        //             }
        //         }
        //     }
        // }

        // stage('Cleanup') {
        //     steps {
        //         script {
        //             sh "docker rmi witoonruamngoen/angular:${BUILD_NUMBER}" 
        //         }      
        //     }
        // }

        // stage('Auth') {
        //     agent {
        //          docker {
        //                 image "google/cloud-sdk:alpine"
        //         }
        //     }
        //     steps {
        //         script {
        //             sh 'gcloud version'
        //             withCredentials([file(credentialsId: 'gcloud-creds', variable: 'GCLOUD_CREDS')]) {
        //                 sh '''
        //                     gcloud auth activate-service-account --key-file="$GCLOUD_CREDS"
        //                 '''
        //                 sh "gcloud auth configure-docker us-central1-docker.pkg.dev"
        //                 sh "gcloud auth list"
        //             }
        //             sh "docker pull witoonruamngoen/angular:${BUILD_NUMBER}"
        //             sh "docker tag witoonruamngoen/angular:${BUILD_NUMBER} gcr.io/valid-unfolding-398711/gcloud-repo "
        //             sh "docker push gcr.io/valid-unfolding-398711/gcloud-repo "
        //         }
        //     }
        // }

        // stage('Pull docker image and push to gcr') {
        //     steps {
        //         script {
        //             sh "docker pull witoonruamngoen/angular:${BUILD_NUMBER}"
        //             sh "docker tag witoonruamngoen/angular:${BUILD_NUMBER} gcr.io/valid-unfolding-398711/gcloud-repo "
        //             sh "docker push gcr.io/valid-unfolding-398711/gcloud-repo "
        //         }      
        //     }
        // }

        // stage('Run gcloud service') {
        //     agent {
        //          docker {
        //                 image "google/cloud-sdk:alpine"
        //         }
        //     }
            
        //     steps {
        //         script {
        //             sh 'gcloud version'
        //             withCredentials([file(credentialsId: 'gcloud-creds', variable: 'GCLOUD_CREDS')]) {
        //                 sh '''
        //                     gcloud auth activate-service-account --key-file="$GCLOUD_CREDS"
        //                 '''
        //             }
        //             sh '''
        //                 gcloud run services replace service.yaml --platform="managed" --region="us-central1"
        //             '''
        //             sh '''
        //                 gcloud run services add-iam-policy-binding angular --region='us-central1' --member='allUsers' --role='roles/run.invoker'
        //             '''
        //         }
        //     }
        // }
    }
}
