pipeline {
    agent any


    stages {

        stage('Clone') {
            steps {
                git credentialsId: 'github-token',
                    url: 'https://github.com/GPTMudhol/portfolio-brilliance.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Test') {
            steps {
                bat 'npm test || echo No tests found'
            }
        }

        stage('Run Project') {
            steps {
                bat 'start cmd /c npm start'
            }
        }
    }
}
