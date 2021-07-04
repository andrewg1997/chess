# %%
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

cred = credentials.Certificate("serviceKey.json")
firebase_admin.initialize_app(cred)

db = firestore.client()




# %%
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

cred = credentials.Certificate("calendar_key.json")
firebase_admin.initialize_app(cred)

db = firestore.client()

# %%
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

cred = credentials.Certificate("calendar_key.json")
firebase_admin.initialize_app(cred)

# %%
db = firestore.client()

doc_ref = db.collection(u'calendar').document(u'date5')
doc_ref.set({
    u'title': "New Year's Eve",
    u'month': 12,
    u'day_of_month': 31,
    u'year': 2021
})

# %%
doc_ref = db.collection(u'calendar').document(u'date5')

doc = doc_ref.get()
if doc.exists:
    print(f'Document data: {doc.to_dict()}')
else:
    print(u'No such document!')

# %%
class MyDate:
    def __init__(self, title, month, day, year, notes):
        self.title = title
        if(isinstance(month, int)):
            self.month = month
        else:
            self.month = MyDate.convertMonthToString(self, month)
        self.day = day
        self.year = year
        self.notes = notes
    def convertMonthToString(self, name):
        if(name == "January" or name == "january" or name == "Jan" or name == "jan"):
            return 1
        if(name == "Febuary" or name == "febuary" or name == "Feb" or name == "feb"):
            return 2
        if(name == "March" or name == "march" or name == "Mar" or name == "mar"):
            return 3
        if(name == "April" or name == "april" or name == "Apr" or name == "apr"):
            return 4
        if(name == "May" or name == "may"):
            return 5
        if(name == "June" or name == "june" or name == "Jun" or name == "jun"):
            return 6
        if(name == "July" or name == "july" or name == "Jul" or name == "jul"):
            return 7
        if(name == "August" or name == "august" or name == "Aug" or name == "aug"):
            return 8
        if(name == "September" or name == "september" or name == "Sep" or name == "sep"):
            return 9
        if(name == "October" or name == "october" or name == "Oct" or name == "oct"):
            return 10
        if(name == "November" or name == "november" or name == "Nov" or name == "nov"):
            return 11
        if(name == "December" or name == "december" or name == "Dec" or name == "dec"):
            return 12
    def getMonthString(self):
        if(self.month == 1):
            return "January"
        if(self.month == 2):
            return "Febuary"
        if(self.month == 3):
            return "March"
        if(self.month == 4):
            return "April"
        if(self.month == 5):
            return "May"
        if(self.month == 6):
            return "June"
        if(self.month == 7):
            return "July"
        if(self.month == 8):
            return "August"
        if(self.month == 9):
            return "September"
        if(self.month == 10):
            return "October"
        if(self.month == 11):
            return "November"
        if(self.month == 12):
            return "December"
date = MyDate("Fourth of July", "July", 4, 2021, "")
print(date.getMonthString())
