import urllib.request
import csv
import json

url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRXJKvpqfkPBpL9_TCR55PGZcybhS16TYuqQ6Phrnd3Bkapj2LrWcdV6OQdSrEOrA/pub?output=csv'
response = urllib.request.urlopen(url)
lines = [l.decode('utf-8') for l in response.readlines()]
reader = csv.reader(lines)
next(reader) # skip header

faculty = []
for row in reader:
    if not row or len(row) < 6: continue
    # 0: S.No, 1: Name, 2: Designation, 3: Date of Joining, 4: Qualification, 5: Nature of Association
    name = row[1].strip()
    if not name: continue
    
    member = {
        "name": name,
        "designation": row[2].strip(),
        "qualification": row[4].strip(),
        "joiningDate": row[3].strip(),
        "association": row[5].strip()
    }
    faculty.append(member)

with open('has_faculty.json', 'w') as f:
    json.dump(faculty, f, indent=4)
print("Done")
