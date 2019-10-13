from django.shortcuts import render

def emailsender(request):
    return render(request, 'emailsender/emailsender.html')