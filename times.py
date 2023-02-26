import populartimes
import livepopulartimes
import json
import sys

#json_obj = livepopulartimes.get_populartimes_by_PlaceID("AIzaSyDDifvQyJnQ38Rm3XpBi-NUxCx7nKtLbrs", "ChIJjb5XVwvHw4kRZ8YebnLtc0o")
#print(json_obj['current_popularity'])

data_to_pass_back = 'Send this to node process.'

input = sys.argv[1]
output = data_to_pass_back
print(output)

sys.stdout.flush()