pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/your-username/your-repo.git'
            }
        }

        stage('Build') {
            steps {
                bat 'echo Building project...'
            }
        }

        stage('Test') {
            steps {
                bat 'echo Running tests...'
            }
        }

        stage('Deploy') {
            steps {
                bat 'echo Deploying...'
            }
        }
    }
}
