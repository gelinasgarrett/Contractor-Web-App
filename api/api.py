from flask import Flask, jsonify, request, json
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///example.db"
db = SQLAlchemy(app)

class Todo(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  firstDimension = db.Column(db.Text, nullable = False)
  secondDimension = db.Column(db.Text, nullable = False)

  def __str__(self):
    return f'{self.id} {self.firstDimension} {self.secondDimension}'

def todo_serializer(todo):
  return { 
    'id': todo.id,
    'firstDimension':todo.firstDimension,
    'secondDimension':todo.secondDimension,
  }

@app.route('/api', methods=['GET'])
def index():
  return jsonify([*map(todo_serializer, Todo.query.all())])
 
@app.route('/api/create', methods=['POST'])
def create():
  request_data = json.loads(request.data)
  print(request_data)

  db.session.commit()
  return {'201': 'todo created successfully'}

@app.route('/api/<int:id>')
def show(id):
  return jsonify([*map(todo_serializer, Todo.query.filter_by(id=id))])

@app.route('/api/<int:id>', methods=["POST"])
def delete(id):
  request_data = json.loads(request.data)
  Todo.query.filter_by(id=request_data['id']).delete()
  db.session.commit()

  return {'204': 'Deleted Successfully'}

@app.route('/api/update/<int:id>', methods=["POST"])
#The 'id' passed in is directly from the route url (The line above) passed when calling this function
def update(id): 
  request_data = json.loads(request.data)
  Todo.query.filter_by(id=request_data['id']).first().content = request_data['content']
  db.session.commit()
  return {'204': 'Updated Successfully'}

if __name__ == '__main__':
  app.run(debug=True)