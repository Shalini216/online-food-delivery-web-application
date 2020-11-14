from flask import  Flask,render_template,request
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime


app=Flask(__name__)
# app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://username:password@localhost/db_name'
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:@localhost/online food delivery' # SQLALCHEMY_DATABASE_URI for mysql.. username will be root
#  beacause xampp is installed without any password
db = SQLAlchemy(app) # initailization of db variable

# Creating class to define database table
'''Sno	Name	Email	Phone_no	Msg	date'''
class Contacts(db.Model):
    Sno = db.Column(db.Integer, primary_key=True)
    Name = db.Column(db.String(80),nullable=False)
    Email_id = db.Column(db.String(50), nullable=False)
    Phone_no = db.Column(db.String(12),nullable=False)
    Msg= db.Column(db.String(120), nullable=False)
    date= db.Column(db.String(12),nullable=True)



@app.route('/')
def Home():
    return render_template('index.html')

@app.route('/menu')
def Menu():
    return render_template('menu.html')

@app.route('/aboutus')
def Aboutus():
    return render_template('aboutus.html')

@app.route('/contact',methods=["GET","POST"])
def Contact():
    if(request.method=='POST'):
        '''Add entry to the database'''
        Name=request.form.get('name')
        Email=request.form.get('email')
        MobileNo=request.form.get('phone')
        Message=request.form.get('message')
        '''Sno	Name	Email_id	Phone_no	Msg	date'''
        entry=Contacts(Name=Name,Phone_no=MobileNo,Msg=Message,Email_id=Email,date =datetime.now())
        db.session.add(entry)
        db.session.commit()

    return render_template('Contact.html')
app.run(debug=True)
