from flask import Flask, request
from flask_cors import CORS, cross_origin
from datetime import datetime

app = Flask(__name__)
app.config["CORS_HEADERS"] = "Content-Type"
app.config["CORS_RESOURCES"] = {r"/*": {"origins": "*"}}
cors = CORS(app)

aro_requests = [
    {"id": 1, "longitude": 100, "latitude": 55.5, "status": "pending"},
    {"id": 2, "longitude": 144, "latitude": -55.5, "status": "completed"},
]


@app.route("/aro-request/<id>")
@cross_origin()
def get_aro_request(id):
    for r in aro_requests:
        if str(r["id"]) == (id):
            return r
    return "Not found", 404


@app.route("/aro-request")
@cross_origin()
def get_all_aro_requests():
    return aro_requests


@app.route("/mission-control", methods=["POST"])
@cross_origin()
def get_mission_control():
    content = request.json
    if content is None or "command" not in content:
        return "Bad request. Must contain `command` property", 400
    content["response"] = "Mission control:" + content["command"]
    return content


@app.route("/recent-logs/<id>")
@cross_origin()
def get_recent_logs(id):
    return {
        "id": id,
        "log": f"Recent logs for {id}",
        "date": datetime.now().isoformat(),
    }


if __name__ == "__main__":
    app.run(debug=True)
