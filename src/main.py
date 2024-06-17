from flask import Flask, request
from flask_cors import CORS, cross_origin

app = Flask(__name__)
app = Flask(__name__)
app.config["CORS_HEADERS"] = "Content-Type"
app.config["CORS_RESOURCES"] = {r"/*": {"origins": "*"}}
cors = CORS(app)

aroRequests = [
    {"id": 1, "longitude": 100, "latitude": 55.5, "status": "pending"},
    {"id": 2, "longitude": 144, "latitude": -55.5, "status": "completed"},
]


@app.route("/aro-request/{id}")
@cross_origin()
def get_aro_request(id):
    for request in aroRequests:
        if request["id"] == id:
            return request
    return "Not found", 404


@app.route("/aro-request")
@cross_origin()
def get_all_aro_requests():
    return aroRequests


@app.route("/mission-control", methods=["POST"])
@cross_origin()
def get_mission_control():
    content = request.json
    content["status"] = "pending"
    return content


if __name__ == "__main__":
    app.run(debug=True)
