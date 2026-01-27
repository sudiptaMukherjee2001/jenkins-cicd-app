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
                sh "ls -ltra"
                sh 'rsync -av .next/standalone ubuntu@3.239.206.146:/home/ubuntu/apps/jenkins-cicd-app/.next/'
                sh 'rsync -av public/ ubuntu@3.239.206.146:/home/ubuntu/apps/jenkins-cicd-app/.next/public/'
                sh 'rsync -av .next/static/ ubuntu@3.239.206.146:/home/ubuntu/apps/jenkins-cicd-app/.next/standalone/.next/static/'
                // sh 'ssh ubuntu@3.239.206.146 "pm2 restart nextjs-app-cicd"'
                echo 'Application deployed to staging.'

            }
        }
    }
}