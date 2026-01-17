import time
import asyncio
import httpx
from fastapi import FastAPI

app = FastAPI()

joke_url = "https://api.chucknorris.io/jokes/random"

@app.get("/joke_async")
async def joke_async():
    start = time.time()

    async with httpx.AsyncClient(timeout=10) as client:
        tasks = [client.get(joke_url) for _ in range(10)]
        responses = await asyncio.gather(*tasks)

    jokes = [r.json()["value"] for r in responses]
    end = time.time()

    return {
        "jokes": jokes,
        "time": end - start
    }


@app.get("/joke_sync")
def joke_sync():
    start = time.time()
    jokes = []

    with httpx.Client(timeout=10) as client:
        for _ in range(10):
            r = client.get(joke_url)
            jokes.append(r.json()["value"])

    end = time.time()
    return {
        "jokes": jokes,
        "time": end - start
    }
