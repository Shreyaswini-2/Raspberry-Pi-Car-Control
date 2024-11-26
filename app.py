from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/move', methods=['POST'])
def move():
    direction = request.json.get('direction')
    print(f"Car is moving {direction}")
    return jsonify({"message": f"Car is moving {direction}"})

if __name__ == '__main__':
    app.run(debug=True)
