import json
import requests

from routes import database_api_base_url
from flask import request, jsonify, Blueprint, abort, current_app
from flask_cors import CORS

upload = Blueprint('upload', __name__,
                 template_folder='templates')
CORS(upload)

@upload.route('/', methods=['POST'])
def upload_files():
   if request.method == 'POST':
      f = request.files['file']
      f.save('user_data/'+f.filename)
      return jsonify({"test": "haha"})
