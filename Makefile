dev:
	docker-compose -f docker-compose.yml up -d

down:
	docker-compose down

build:
	docker build -t fareasternvikings/fevg-frontend:0.0.1 -f Dockerfile.production .

prod:
	docker run -p 80:80 --rm -d --name fevg-frontend fareasternvikings/fevg-frontend:0.0.1		