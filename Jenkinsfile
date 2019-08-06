node {
	def app
	stage('Clone repository'){
		checkout scm
	}
	
	stage('Build Image'){
		app = docker.build('anthonyvu:${env.BUILD_ID}')
	}

	stage('Test'){
		app.inside{
			sh 'npm test'
		}
	}

	stage('Push Image'){
		docker.withRegistry('https://registry.hub.docker.com','docker-hub-credentials') {
			app.push('latest')
		}
	}

}

