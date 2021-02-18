import datetime

from django.shortcuts import render

# Create your views here.
def index(request):
    day = datetime.datetime.now()
    return render(request, "day/index.html",{
         "day": day.month == 3 and day.day == 26 and day == 3
        # "day": True 
    })
    