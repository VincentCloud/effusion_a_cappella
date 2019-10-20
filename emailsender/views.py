from django.shortcuts import render
from django.core.mail import send_mail, BadHeaderError
from django.http import HttpResponse, HttpResponseRedirect
from .forms import EmailForm

def emailsender(request):
    return render(request, 'emailsender/emailsender.html')

def sendemail(request):
    if request.method == 'GET':
        form = EmailForm()
    else:
        form = EmailForm(request.POST)
        if form.is_valid():
            subject = form.cleaned_data['subject']
            message = form.cleaned_data['message']
            sender = form.cleaned_data['sender']
            cc_myself = form.cleaned_data['cc_myself']

            recipients = ['xihe.tian@mail.mcgill.ca']
            if cc_myself:
                recipients.append(sender)
            try:
                send_mail(subject, message, sender, recipients)
            except BadHeaderError:
                return HttpResponse('Invalid header found')
            return HttpResponse('email sent!')
        else:
            return HttpResponse('Invalid form')
    return render(request, "emailsender/emailsender.html", {'form': form})
