pipeline {
    agent none
    tools {
    nodejs 'nodejs_avaliable'
    }

    stages {
        stage('Build_nextjs') {
            agent { label 'linux-agent-1' }
            steps {

                echo 'Building Next.js application...'
                // intall all the dependencies
                sh 'npm install'
                // build the nextjs application
                sh 'npm run build'
                stash name: 'nextjs-artifacts', includes: '.next/**'
            }
        }
        stage('Test_nextjs') {
            steps {
                //run fake tests
                echo 'Running tests...'
            }
        }
        stage('Deploy_to_staging') {
            agent { label 'linux-agent-2' }
            steps {
                //
                echo 'Deploying to staging environment...'
                unstash 'nextjs-artifacts'
                // simulate deployment steps
                sh 'npm run start &'
                echo 'Application deployed to staging.'

            }
        }
    }
}