pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                bat 'echo Installing dependencies...'
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

        stage('Build') {
    steps {
        bat 'npm install'
        bat 'npm run build'
    }
}

stage('Deploy') {
    steps {
        bat '''
        rmdir /S /Q C:\\deploy\\portfolio
        mkdir C:\\deploy\\portfolio
        xcopy /E /I /Y dist\\* C:\\deploy\\portfolio

        echo Starting server...
        cd C:\\deploy\\portfolio
        npx serve -l 5000
        '''
    }
}
       
    }
}
