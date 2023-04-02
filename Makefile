dev:
	docker-compose -f docker-compose.yml up -d

down:
	docker-compose down

build:
	docker build -t fareasternvikings/fevg-frontend:0.0.1 -f Dockerfile.production .

prod:
	docker run -p 80:80 --rm -d --name fevg-frontend fareasternvikings/fevg-frontend:0.0.1

copy-file:
	scp -i ~/.ssh/vikings_rsa .env root@185.177.216.70:/root/fevg-frontend
