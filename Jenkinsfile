pipeline {
    agent any

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