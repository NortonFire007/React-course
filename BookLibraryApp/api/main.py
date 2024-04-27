from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import os
import random
import json

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["GET"],
    allow_headers=["*"],
)

with open('data/books.json', 'r') as f:
    books_data = json.load(f)

@app.get('/')
async def root():
    return {'message': 'Hello World'}

@app.get('/random-book')
async def random_book():
    return random.choice(books_data)


port = int(os.environ.get('PORT', 4000))

if __name__ == "__main__":
    uvicorn.run(app, port=port)
     # or uvicorn main:app --port 4000 start project from terminal