pipeline {
    agent any

    tools {
        nodejs 'Node22'
    }

    stages {
        stage('Install') {
            steps {
                sh 'node --version'
                sh 'npm --version'
                sh 'npm ci'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t agentdo .'
            }
        }

        stage('Docker Run') {
            steps {
                sh 'docker rm -f agentdo || true'
                sh 'docker run -d --name agentdo -p 8000:8000 agentdo'
            }
        }
    }
}