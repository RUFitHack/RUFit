import populartimes
import livepopulartimes
import json

json_obj = livepopulartimes.get_populartimes_by_PlaceID("AIzaSyDDifvQyJnQ38Rm3XpBi-NUxCx7nKtLbrs", "ChIJjb5XVwvHw4kRZ8YebnLtc0o")

print(json_obj['current_popularity'])