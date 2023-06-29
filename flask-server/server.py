from flask import Flask

app = Flask(__name__)

#Login Endpoint
@app.route("/")
def login(): 
    return {"Hello" : ["Hello World! You've entered the login page"]}

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)