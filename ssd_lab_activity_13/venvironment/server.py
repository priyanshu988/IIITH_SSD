from flask import Flask , request, flash, url_for, redirect, render_template ,session
from flask_sqlalchemy import SQLAlchemy
from flask_login import *


app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///user.database1'
app.config['SECRET_KEY'] = 'priyanshu'

database1 = SQLAlchemy(app)
loginManager = LoginManager()

# loginManager.init_app(app)

def __init__(self, username, email, password):
   self.username = username
   self.email = email
   self.password = password

class User(database1.Model):
    username = database1.Column(database1.String(25), primary_key=True)
    email = database1.Column(database1.String(80), unique=True, nullable=True)
    password = database1.Column(database1.String(80), nullable=True)


@loginManager.user_loader
def load_user(username):
    return User.query.get(username)

def test_connection():
    with app.app_context():
        database1.create_all()
        app.run(debug=True)

@app.route('/user/signin',methods=['POST'])
def do_signin():
    if(request.method=='POST'):
        req=request.get_json()
        email = req['email']
        password = req['password']
        check_user = User.query.filter_by(email=email).first()
        if(check_user is not None):
            if(check_user.password==password):
                login_user(check_user)
                return "Successfully Loggedin"
            else:
                return "Incorrect Credential"
        else:
            return "No Such User Found"

@app.route('/user/signup', methods = ['POST'])
def signup():
    if(request.method == 'POST'):
        req = request.get_json()
        username = req['username']
        email = req['email']
        password = req['password']
        # check_user = User.query.filter_by(name=name).first()
        obj = User(username=username,email=email,password=password)
        database1.session.add(obj)
        database1.session.commit()
        return "Signup Successfully"
    else:
        return "Signup Unsuccessfully"

@app.route('/user/signout')
def logout():
    session.clear()
    return redirect(url_for('home'))

test_connection()