#!/usr/bin/env bash

# Front-end Build #
cd frontend/

npm install || exit 1 "Could not install npm dependencies"
npm run build || exit 1 "Could not build Vue Bundle"
cd ..

# Back-end Build
cd backend/

poetry install || exit 1 "Could not install pyproject.toml dependencies"
poetry shell|| exit 1 "Could not load shell with python venv using Poetry"
python manage.py migrate || exit 1 "Could not migrate DB changes correctly"
python manage.py test || exit 1 "Failure when running tests"
python manage.py collectstatic --noinput || exit 1 "Could not run collectstatic management command"