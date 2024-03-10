
from flask import Flask, render_template, jsonify, request
from flask_cors import CORS
from custom_gpt import new_gpt

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return render_template('landing.html')

@app.route('/data', methods = ["GET", "POST"])
def data():
    if request.method == "GET":
        return jsonify({
            "message": "Please access this page through a post request",
        })
    req = dict(request.get_json())

    img_url1, img_url2, text = new_gpt(36.4081, -119.0903, 0.10, "2017-05-01", "2018-09-01")
    return jsonify({
      "url1": img_url1,
      "url2": img_url2,
      "text": text,
    })


if __name__ == '__main__':
    app.run(
        debug=False,
        host='0.0.0.0',
        port=8080
    )
