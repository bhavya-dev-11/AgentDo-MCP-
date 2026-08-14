pipeline {
    agent any

    environment {
        DATABASE_URL = credentials('database-url')
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

        stage('Docker Run') {
            steps {
                sh 'docker rm -f agentdo || true'
                sh 'docker run -d --name agentdo -p 8000:8000 -e DATABASE_URL="$DATABASE_URL" agentdo'
            }
        }
    }
}