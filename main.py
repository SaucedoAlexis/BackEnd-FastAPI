from fastapi import FastAPI

app = FastAPI()

@app.get("/recipe")
def get_recipe():
    return {
        "ingredients": [
            "500g de harina",
            "300ml de agua tibia",
            "10g de levadura seca",
            "10g de sal"
        ],
        "instructions": [
            "Mezclar la harina, levadura y sal en un bol grande.",
            "Agregar el agua tibia y mezclar hasta formar una masa.",
            "Amasar durante 10 minutos hasta que esté suave.",
            "Dejar reposar la masa cubierta durante 1 hora.",
            "Precalentar el horno a 220°C.",
            "Formar el pan y hornear durante 30-35 minutos."
        ]
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)