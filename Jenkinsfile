pipeline {
    agent {
        docker {
            image 'node:22-alpine'
        }
    }

    stages {
        stage('Install') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t agentdo .'
            }
        }
    }
}