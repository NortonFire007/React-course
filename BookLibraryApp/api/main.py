from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import os
import random
import json

app = FastAPI()

with open('data/books.json', 'r') as f:
    books_data = json.load(f)

@app.get('/')
async def root():
    return {'message': 'Hello World'}

@app.get('/random-book')
async def random_book():
    return random.choice(books_data)


port = int(os.environ.get('PORT', 8000))

if __name__ == "__main__":
    uvicorn.run(app, port=port)
     # or uvicorn main:app --host 0.0.0.0 --port 8000 start project