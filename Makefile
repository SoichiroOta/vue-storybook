build:
	docker-compose build

up:
	docker-compose up

up--build:
	docker-compose up --build

down:
	docker-compose down

install:
	docker-compose run --rm vue npm install

serve:
	docker-compose run --rm --service-ports vue npm run serve

lint:
	docker-compose run --rm vue npm run lint

storybook:
	docker-compose run --rm --service-ports vue-storybook npm run storybook

build--report--production:
	docker-compose run --rm vue npm run build --report

serve--production:
	docker build -t vue-app .
	docker run -it -p 8000:80 --rm --name vue-app-1 vue-app

storybook--production:
	docker build -t vue-storybook-app -f ./Dockerfile.sb .
	docker run -it -p 8006:80 --rm --name vue-storybook-app-1 vue-storybook-app

build-storybook--production:
	docker-compose run --rm vue npm run build-storybook