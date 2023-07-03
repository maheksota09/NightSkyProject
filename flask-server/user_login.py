# from flask import Blueprint
# from flask_sqlalchemy import SQLAlchemy

# # Instantiating Database below
# user_login_api = Blueprint('user_login_api', __name__)
# db = SQLAlchemy(user_login_api)
# # user_login_api.config['SECRET_KEY'] = 

# # Create a USER
# class User(db.Model, UserMixin):
#     id = db.Column(db.Integer, primary_key=True)
#     username = db.Column(db.String(20), nullable=False)
#     username = db.Column(db.String(80), nullable=False)

# @user_login_api.route("/user")
# def userLogin():
#     return "User Logging In"
