pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                bat 'echo Installing dependencies...'
            }
        }

        stage('Build') {
            steps {
                bat 'echo Building project...'
            }
        }

        stage('Test') {
            steps {
                bat 'echo Testing project...'
            }
        }

        stage('Run Project') {
            steps {
                bat 'echo Running project...'
            }
        }
        stage('Deploy') {
    steps {
        bat '''
        echo Deploying project...
        xcopy /E /I /Y * C:\\deploy\\portfolio
        '''
    }
}
    }
}
