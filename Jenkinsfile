pipeline {
    agent any

    tools {
        nodejs 'Node22'
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