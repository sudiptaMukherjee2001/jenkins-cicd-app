pipeline {
    agent none
    tools {
    nodejs 'nodejs_avaliable'
    }

    stages {
        stage('Build_nextjs') {
            steps {
                echo 'Building Next.js application...'
                // intall all the dependencies
                sh 'npm install'
                // build the nextjs application
                sh 'npm run build'
            }
        }
        stage('Test_nextjs') {
            steps {
                //run fake tests
                echo 'Running tests...'
            }
        }
        stage('Deploy_to_staging') {
            steps {
                //
                echo 'Deploying to staging environment...'
            }
        }
    }
}