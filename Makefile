build:
	docker-compose build
up:
	docker-compose up -d
down:
	docker-compose down
exec:
	docker-compose exec vuejs sh
log:
	docker logs vuejs