pipeline{

    agent any
    stages{

        stage('Checkout'){
            steps{
                echo 'Checking out.. cloner+checkout le depot github'
                git branch:"master", url: 'https://github.com/FatenBahri/toDo-App.git'
            }
        }
        stage('Check Environment') {
            steps {
                sh 'node -v'
                sh 'npm -v'
                sh 'ng version'
           }
       }
    }
        post{
            success{
                echo 'Pipeline executed successfully!'
            }
            failure{
                echo 'Pipeline failed. '
            }
        }
    
}