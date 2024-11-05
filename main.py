from fastapi import FastAPI, Request, Form
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from fastapi.responses import HTMLResponse, JSONResponse

import matrix_operations

app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")

templates = Jinja2Templates(directory="templates")

@app.get("/", response_class=HTMLResponse)
async def read_root(request: Request):
    return templates.TemplateResponse("index.html", {"request": request, "message": "To jest wiadomość dynamiczna!"})

@app.get("/matmul", response_class=HTMLResponse)
async def get_api(request: Request):
    return templates.TemplateResponse("matmul.html", {"request": request})

@app.get("/login", response_class=HTMLResponse)
async def get_api(request: Request):
    return templates.TemplateResponse("login.html", {"request": request})

@app.post("/matmul", response_class=HTMLResponse)
async def submit_matrices(request: Request, inputText1: str = Form(...), inputText2: str = Form(...)):
    result = matrix_operations.multiply_matrix_end(inputText1.strip(), inputText2.strip())
    if result != 'Matrix multiplication is not possible':
        result_text = '\n'.join([' '.join(map(str, row)) for row in result])
    else:
        result_text = 'Matrix multiplication is not possible'
    return templates.TemplateResponse("matmul.html", {"request": request,"textA":inputText1, "textB":inputText2, "resultText": result_text})

@app.get("/api/json", response_class=JSONResponse)
async def get_json():
    data = {"message": "This is a JSON response", "status": "success"}
    return JSONResponse(content=data)