from flask import Flask
from flask_cors import CORS, cross_origin
from config import ApplicationConfig
from user_login import user_login_api

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

#api blueprints
# app.register_blueprint(user_login_api)

#Home Endpoint
@app.route("/home")
@cross_origin()
def home(): 
    return {"Hello" : ["Hello World! You've entered the Home page"]}

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)