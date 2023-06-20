from flask import Flask

app = Flask(__name__)

#Login Endpoint
@app.route("/login")
def login(): 
    return {"Hello" : ["Hello World! You've entered the login page"]}

if __name__ == "__main__":
    app.run(debug=True)