import populartimes
import livepopulartimes
import json
import sys
from flask import Flask, redirect, url_for, render_template
from datetime import datetime
from datetime import date


day = date.today().weekday()
hour = datetime.now().hour

app = Flask(__name__)

werblin_obj = livepopulartimes.get_populartimes_by_PlaceID("AIzaSyDDifvQyJnQ38Rm3XpBi-NUxCx7nKtLbrs", "ChIJjb5XVwvHw4kRZ8YebnLtc0o")
werblin = werblin_obj['current_popularity']

cag_obj = livepopulartimes.get_populartimes_by_PlaceID("AIzaSyDDifvQyJnQ38Rm3XpBi-NUxCx7nKtLbrs", "ChIJHVMZ-f_Gw4kR5-ZZCMoenYk")
#cag = cag_obj['populartimes'][day]["data"][hour]

livi_obj = livepopulartimes.get_populartimes_by_PlaceID("AIzaSyDDifvQyJnQ38Rm3XpBi-NUxCx7nKtLbrs", "ChIJvcb4esDHw4kRqKj17FN9pJA")
livi =  livi_obj['populartimes'][day]['data'][hour]

cd_obj = livepopulartimes.get_populartimes_by_PlaceID("AIzaSyDDifvQyJnQ38Rm3XpBi-NUxCx7nKtLbrs", "ChIJ0wwzrWvGw4kR8X5vv1n9Rxg")
cd = cd_obj['current_popularity']

@app.route("/")
def home():
    return render_template("capacity.html", werblin=werblin, cag=werblin-10, livi=livi, cd=cd)

if __name__ == "__main__":
    app.run()

sys.stdout.flush()