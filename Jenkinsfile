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
            when {
                branch 'staging-master'
            }

            steps {
                //
                echo 'Deploying to staging environment...'
                unstash 'nextjs-artifacts'
                sh "ls -ltra"
                sh 'rsync -av .next/standalone ubuntu@44.204.165.25 :/home/ubuntu/apps/jenkins-cicd-app/.next/'
                sh 'rsync -av public/ ubuntu@44.204.165.25 :/home/ubuntu/apps/jenkins-cicd-app/.next/public/'
                sh 'rsync -av .next/static/ ubuntu@44.204.165.25 :/home/ubuntu/apps/jenkins-cicd-app/.next/standalone/.next/static/'
                // ssh into the Devlopment/staging server and restart the pm2 process if it exists otherwise start it
                sh 'ssh ubuntu@44.204.165.25"cd /home/ubuntu/apps/jenkins-cicd-app/.next/standalone && pm2 describe nextjs-app-staging > /dev/null && pm2 restart nextjs-app-staging || pm2 start server.js --name nextjs-app-staging"'
                echo 'Application deployed to staging.'

            }
        }
        stage('Deploy_to_production') {
            when {
                branch 'main'
            }
            agent { label 'linux-agent-2' }
            steps {
                //
                echo 'Deploying to production environment...'
                unstash 'nextjs-artifacts'
                sh "ls -ltra"
                sh 'rsync -av .next/standalone ubuntu@3.237.172.102 :/home/ubuntu/prod-env/.next/'
                sh 'rsync -av public/ ubuntu@3.237.172.102 :/home/ubuntu/prod-env/.next/public/'
                sh 'rsync -av .next/static/ ubuntu@3.237.172.102 :/home/ubuntu/prod-env/.next/standalone/.next/static/'
                sh 'ssh ubuntu@3.237.172.102 "cd /home/ubuntu/prod-env/.next/standalone && pm2 describe nextjs-app-prod > /dev/null && pm2 restart nextjs-app-prod || pm2 start server.js --name nextjs-app-prod"'

                echo 'Application deployed to production.'

            }
        }
    }
}