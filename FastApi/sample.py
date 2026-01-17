from fastapi import FastAPI,Body,Form,UploadFile,File
from pydantic import BaseModel


app=FastAPI()

class Item(BaseModel):
    name:str
    instock:float
    price:float
    
    
@app.post("/json")    
def receive_json(item:Item):
    return {
        "type":"json",
            "name":item.name,
            "instock":item.instock,
            "price":item.price
            }
    
@app.post("/text")    
def receive_text(content: str = Body(..., media_type="text/plain")):
    return {
        "type":"text",
        "content":content
        }
    
    
@app.post("/form")    
def receive_form(user_name: str = Form(...), user_age: int = Form(...)):
    return {"user_name": user_name, "user_age": user_age}


@app.post("/upload")
def receive_file(file: UploadFile = File(...)):
    return {"filename": file.filename}
