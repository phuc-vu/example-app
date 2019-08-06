node {
	def app
	
	
	stage('Clone repository'){
	 /* Let's make sure we have the repository cloned to our workspace */

		checkout scm
	}
	
	stage('Build Image'){
	  /* This builds the actual image; synonymous to
         * docker build on the command line */

		app = docker.build("anthonyvu:${env.BUILD_ID}","--name=example-app")
	}

	stage('Test'){
	  /* Integration internal test for project */

		app.inside{
			sh 'npm test'
		}
	}

	stage('Push Image'){
		/* Finally, we'll push the image into Docker Hub */

		docker.withRegistry('https://registry.hub.docker.com','docker-hub-credentials') {
			app.push('latest')
		}
	}

}
